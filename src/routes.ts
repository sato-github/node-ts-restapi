import { Express, Request, Response } from 'express';
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  updatePostHandler,
} from './controller/post.controller';
import {
  createUserSessionHandler,
  getUserSessionHandler,
  invalidateUserSessionHandler,
} from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';
import { requireUser, validateRequest } from './middleware';
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from './schema/post.schema';
import {
  createUserSchema,
  createUserSessionSchema,
} from './schema/user.schema';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // 会員登録
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  // ログイン
  app.post(
    '/api/sessions',
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // ユーザーセッション
  app.get('/api/sessions', requireUser, getUserSessionHandler);

  // ログアウト
  app.delete('/api/sessions', requireUser, invalidateUserSessionHandler);

  // Create Post
  app.post(
    '/api/posts',
    [requireUser, validateRequest(createPostSchema)],
    createPostHandler
  );

  // Update Post
  app.put(
    '/api/posts/:postId',
    [requireUser, validateRequest(updatePostSchema)],
    updatePostHandler
  );

  // Get Post
  app.get('/api/posts/:postId', getPostHandler);

  // Delete Post
  app.delete(
    '/api/posts/:postId',
    [requireUser, validateRequest(deletePostSchema)],
    deletePostHandler
  );
}
