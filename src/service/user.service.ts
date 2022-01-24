import { DocumentDefinition, FilterQuery, UpdateQuery } from 'mongoose';
import User, { UserDocument } from '../model/user.model';
import { omit } from 'lodash';
import Session, { SessionDocument } from '../model/session.model';

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument['email'];
  password: string;
}) {
  const user = await User.findOne({ email });
  if (!user) return false;

  const isValid = await user.comparePassword(password);
  if (!isValid) return false;

  return omit(user.toJSON(), 'password');
}

export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return Session.updateOne(query, update);
}
