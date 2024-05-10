import { graphqlRequest } from "./graphqlRequest";

export async function getAllPosts(endCursor = null, numberOfPosts = 12) {
  const condition = `after: "${endCursor}", first: ${numberOfPosts}, where: {orderby: {field: DATE, order: DESC}}`;
  const query = {
    query: `query getAllPosts {
      posts(${condition}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          date
          excerpt
          slug
          title
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  width
                  sourceUrl
                  height
                }
                file
              }
            }
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }`,
  };
  const data = await graphqlRequest(query);
  console.log(data);
  const allPosts = await data.data.posts;
  return allPosts;
}
