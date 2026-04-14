import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    await connectToDb();

    const posts = await Post.find().lean(); // 🔥 IMPORTANT

    console.log("POSTS FROM DB:", posts);

    return JSON.parse(JSON.stringify(posts)); // 🔥 NEXT.JS SAFE
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug }).lean();
    return post;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id).lean();
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find().lean();
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
};