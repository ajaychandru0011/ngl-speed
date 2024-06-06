import { getAllPosts } from "../../lib/posts";

export default async function handler(req, res) {
  console.log(req);
  const postData = await getAllPosts();
  res.status(200).json(postData);
  console.log(postData);
}
