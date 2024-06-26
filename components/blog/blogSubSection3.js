import Link from "next/link";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";

const BlogSubSection3 = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 mb-30 item-article customer-stories"
        >
          <div className="card-blog-grid card-blog-grid-3 hover-up">
            <div className="card-image">
              <Link href={post.slug}>
                {/* <Image
            layout="responsive"
            width={100}
            height={100}
            src="/assets/imgs/page/blog/img3.png"
            loading="lazy"
            alt="iori"
          /> */}
                <FeaturedImage post={post} styleClasses="" priority={false} />
              </Link>
              {/* <Link href="blog">
          <label className="lbl-border">Marketting</label>
        </Link> */}
            </div>
            <div className="card-info">
              <Link href={post.slug}>
                <h4 className="color-brand-1">
                  {post.title}
                  {/* 10 Content Proofreading Tips to Catch More Avoidable Goofs */}
                </h4>
              </Link>
              <div className="mb-25 mt-10">
                <span className="font-xs color-grey-500">
                  <Date dateString={post.date} />
                </span>
                <span className="font-xs color-grey-500 icon-read">
                  2 min read
                </span>
              </div>
              <div
                className="blog-card-excerpt mt-20"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              ></div>
              {/* <p className="font-sm color-grey-500 mt-20">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit laborum — semper quis lectus nulla.
                Interactively transform magnetic growth strategies whereas
                prospective "outside the box" thinking.
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogSubSection3;
// <div className="col-lg-4 col-md-6 mb-30 item-article customer-stories">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img3.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       {/* <Link href="blog">
//         <label className="lbl-border">Marketting</label>
//       </Link> */}
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           10 Content Proofreading Tips to Catch More Avoidable Goofs
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">November 17, 2022</span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//         officia deserunt mollit laborum — semper quis lectus nulla.
//         Interactively transform magnetic growth strategies whereas
//         prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article product-news">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img4.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       {/* <Link href="blog">
//         <label className="lbl-border">Tutorial</label>
//       </Link> */}
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           Everything a Beginner Blogger Needs to Know for 2023
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">November 17, 2022</span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//         officia deserunt mollit laborum — semper quis lectus nulla.
//         Interactively transform magnetic growth strategies whereas
//         prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article company">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img5.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       {/* <Link href="blog">
//         <label className="lbl-border">Team work</label>
//       </Link> */}
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           Bad Email Marketing and Nickelback Don’t Have Much in Common
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">November 17, 2022</span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//         officia deserunt mollit laborum — semper quis lectus nulla.
//         Interactively transform magnetic growth strategies whereas
//         prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
