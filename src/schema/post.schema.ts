import { object, string, ref } from 'yup';

const payload = {
  body: object({
    title: string().required('Title is required'),
    body: string()
      .required('Body is required')
      .min(20, 'Body is too short - shold be 20 chars minimum'),
  }),
};

const params = {
  params: object({
    postId: string().required('postId is reqired'),
  }),
};

export const createPostSchema = object({
  ...payload,
});

export const updatePostSchema = object({
  ...params,
  ...payload,
});

export const deletePostSchema = object({
  ...params,
});
