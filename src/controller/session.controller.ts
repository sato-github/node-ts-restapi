import { Request, Response } from 'express';
import config from 'config';
import log from '../logger';
import {
  createAccessToken,
  createSession,
  findSessions,
} from '../service/session.service';
import { updateSession, validatePassword } from '../service/user.service';
import { sign } from '../utils/jwt.utils';
import { get } from 'lodash';

export async function createUserSessionHandler(req: Request, res: Response) {
  // バリデーションemail&password
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send('Invalid username or password');

  // セッション
  const session = await createSession(user._id, req.get('user-agent') || '');

  // Token作成
  const accessToken = createAccessToken({
    user,
    session,
  });

  // refresh token作成
  const refreshToken = sign(session, {
    expiresIn: config.get('refreshTokenTtl'),
  });

  // send
  return res.send({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, 'user.session');

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}
