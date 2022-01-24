import { AnySchema } from 'yup';
import { NextFunction, Request, Response } from 'express';
import log from '../logger';

const validate =
  (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.validate({
          body: req.body,
          query: req.query,
          params: req.params,
        });

        return next();
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
          return res.status(409).send(e.message);
        }
      }
    };

export default validate;
