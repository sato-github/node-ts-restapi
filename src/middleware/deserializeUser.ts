import { NextFunction, Request, Response } from 'express';
import { get } from 'lodash';
import { reIssueAccessToken } from '../service/session.service';
import { decode } from '../utils/jwt.utils';

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // ベアラー認証スキーム
  const accessToken = get(req, 'headers.authorization', '').replace(
    /^Bearer\s/,
    ''
  );

  const refreshToken = get(req, 'headers.x-refresh');

  // アクセストークンが存在しない場合、next
  if (!accessToken) return next();

  // decodeし、decodedオブジェクトが返却された場合はリクエストのユーザに設定
  const { decoded, expired } = decode(accessToken);
  if (decoded) {
    // @ts-ignore
    req.user = decoded;

    return next();
  }

  // アクセストークンの有効期限外、かつリフレッシュトークンの有効範囲内の場合、
  // アクセストークンを再発行し、ヘッダーに追加
  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader('x-access-token', newAccessToken);

      const { decoded } = decode(newAccessToken);

      // @ts-ignore
      req.user = decoded;
    }

    return next();
  }

  return next();
};

export default deserializeUser;
