import Link from "next/link";
import Image from "next/image";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";
const BlogSubSection1 = ({ latestPost }) => {
  return (
    <>
      <div className="col-lg-12 mb-60 item-article featured">
        <div className="item-1">
          <div className="box-cover-border">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* <Image
                  layout="responsive"
                  // we'll get height width from wordpress
                  width={2070}
                  height={1713}
                  className="d-block"
                  src="/assets/imgs/page/homepage2/img-marketing.png"
                  // we'll need src from the wordpress
                  alt="iori"
                  priority
                /> */}
                <FeaturedImage
                  post={latestPost}
                  styleClasses="d-block"
                  priority={true}
                />
              </div>
              <div className="col-lg-6">
                <div className="box-info-video">
                  {/* <span className="btn btn-tag">Featured</span> */}
                  <Link href="blog-detail">
                    <h3 className="color-brand-1 mt-15 mb-20">
                      {/* 7 Things To Keep In Mind When Starting A Business */}
                      {latestPost.title}
                      {/* this will have title */}
                    </h3>
                  </Link>
                  <div className="mb-25 mt-10">
                    <span className="font-xs-color-grey-500">
                      <Date dateString={latestPost.date} />
                      {/* date from wordpress */}
                    </span>
                    <span className="font-xs-color-grey-500 icon-read">
                      2 min read
                      {/* time to read from wordpress */}
                    </span>
                  </div>
                  <div
                    className="excerptWordpress"
                    dangerouslySetInnerHTML={{
                      __html: latestPost.excerpt,
                    }}
                  >
                    {/* short description from wordpress
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit laborum — semper quis
                    lectus nulla. Interactively transform magnetic growth
                    strategies whereas prospective "outside the box" thinking. */}
                  </div>
                  <div className="box-button text-start mt-45">
                    {" "}
                    <Link
                      className="btn btn-default font-sm-bold pl-0 hover-up"
                      href="blog-detail"
                      // dynamic href attribute / id from wordpress
                    >
                      Read more
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSubSection1;
