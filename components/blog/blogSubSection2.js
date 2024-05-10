import Link from "next/link";
// import Image from "next/image";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";
const BlogSubSection2 = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className="col-lg-6 col-md-6 mb-30 item-article featured"
        >
          <div className="card-blog-grid card-blog-grid-3 hover-up">
            <div className="card-image">
              <Link href="/blog-detail">
                <FeaturedImage post={post} styleClasses="" priority={false} />
                {/* <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/imgs/page/blog/img1.png"
                loading="lazy"
                alt="iori"
              /> */}
              </Link>
              <Link href="blog">
                {/* <label className="lbl-border">Marketting</label> */}
              </Link>
            </div>
            <div className="card-info">
              <Link href="/blog-detail">
                <h4 className="color-brand-1">
                  {post.title}
                  {/* How to save money - 8 simple ways to start saving money every
                month */}
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
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
              Interactively transform magnetic growth strategies whereas
              prospective "outside the box" thinking.
            </p> */}
            </div>
          </div>
        </div>
      ))}
      {/* <div className="col-lg-6 col-md-6 mb-30 item-article featured">
        <div className="card-blog-grid card-blog-grid-3 hover-up">
          <div className="card-image">
            <Link href="/blog-detail">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/imgs/page/blog/img1.png"
                loading="lazy"
                alt="iori"
              />
            </Link>
            <Link href="blog">
              {/* <label className="lbl-border">Marketting</label> */}
      {/* </Link>
          </div>
          <div className="card-info">
            <Link href="/blog-detail">
              <h4 className="color-brand-1"> */}
      {/* How to save money - 8 simple ways to start saving money every
                month */}
      {/* </h4>
            </Link>
            <div className="mb-25 mt-10">
              <span className="font-xs color-grey-500">November 17, 2022</span>
              <span className="font-xs color-grey-500 icon-read">
                2 min read
              </span>
            </div>
            <p className="font-sm color-grey-500 mt-20">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
              Interactively transform magnetic growth strategies whereas
              prospective "outside the box" thinking.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="col-lg-6 col-md-6 mb-30 item-article guides">
        <div className="card-blog-grid card-blog-grid-3 hover-up">
          <div className="card-image">
            <Link href="/blog-detail">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/imgs/page/blog/img2.png"
                loading="lazy"
                alt="iori"
              />
            </Link>
            <Link href="blog"> */}
      {/* <label className="lbl-border">Technology</label> */}
      {/* </Link>
          </div>
          <div className="card-info">
            <Link href="/blog-detail">
              <h4 className="color-brand-1">
                Essential Steps to Building And Refining an Effective UX
                Portfolio
              </h4>
            </Link>
            <div className="mb-25 mt-10">
              <span className="font-xs color-grey-500">November 17, 2022</span>
              <span className="font-xs color-grey-500 icon-read">
                2 min read
              </span>
            </div>
            <p className="font-sm color-grey-500 mt-20">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
              Interactively transform magnetic growth strategies whereas
              prospective "outside the box" thinking.
            </p>
          </div>
        </div>
      </div>  */}
    </>
  );
};

export default BlogSubSection2;
