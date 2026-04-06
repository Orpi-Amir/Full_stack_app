import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
};