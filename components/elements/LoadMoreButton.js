import { getAllPosts } from "../../lib/posts";

const LoadMoreButton = ({ posts, setPosts, loading, setLoading }) => {
  async function loadMoreBlogs() {
    // setting loading state to true
    setLoading(true);
    // fetching more posts (it takes endCursor and number of posts to be fetched as arguements)
    const morePosts = await getAllPosts(posts.pageInfo.endCursor, 6);

    // initialising object for updated posts
    let updatedPosts = {
      pageInfo: {},
      nodes: [],
    };
    // updating pageinfo for updated posts
    updatedPosts.pageInfo = morePosts.pageInfo;
    // pushing the previous posts to updatedposts nodes array
    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });
    // checking if there is a next page and if endcursor is not null
    if (posts.pageInfo.hasNextPage && posts.pageInfo.endCursor !== null) {
      // updating the fetched posts
      morePosts.nodes.map((node) => updatedPosts.nodes.push(node));
      //  updating the posts object
      setPosts(updatedPosts);
    }
    // setting loading state to false
    setLoading(false);
  }
  return (
    <button
      className="btn btn-brand-1-full hover-up custom-btn-size"
      onClick={loadMoreBlogs}
    >
      {!loading ? " Load More Blogs" : "Loading..."}
    </button>
  );
};

export default LoadMoreButton;
