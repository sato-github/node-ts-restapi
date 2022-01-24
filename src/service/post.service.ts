import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import Post, { PostDocument } from '../model/post.model';

export function createPost(input: DocumentDefinition<PostDocument>) {
  try {
    return Post.create(input);
  } catch (error) {
    console.error(error);
  }
}

export function findPost(
  query: FilterQuery<PostDocument>,
  options: QueryOptions = { lean: true }
) {
  return Post.findOne(query, {}, options);
}

export function findAndUpdate(
  query: FilterQuery<PostDocument>,
  update: UpdateQuery<PostDocument>,
  options: QueryOptions
) {
  return Post.findOneAndUpdate(query, update, options);
}

export function deletePost(query: FilterQuery<PostDocument>) {
  return Post.deleteOne(query);
}
