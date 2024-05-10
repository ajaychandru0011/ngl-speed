import { getAllPosts } from "../../lib/posts";

const LoadMoreButton = ({ posts, setPosts }) => {
  async function loadMoreBlogs(e) {
    const clickedButton = e.target;
    const morePosts = await getAllPosts(posts.pageInfo.endCursor, 6);
    let updatedPosts = {
      pageInfo: {},
      nodes: [],
    };
    updatedPosts.pageInfo = morePosts.pageInfo;
    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });
    morePosts.nodes.map((node) => updatedPosts.nodes.push(node));
    setPosts(updatedPosts);
  }
  return (
    <button
      className="btn btn-brand-1-full hover-up custom-btn-size"
      onClick={loadMoreBlogs}
    >
      Load More Blogs...
    </button>
  );
};

export default LoadMoreButton;
