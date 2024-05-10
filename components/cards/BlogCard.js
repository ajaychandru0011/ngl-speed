import Link from "next/link";
import Image from "next/image";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";

const BlogCard = ({ title, date, readTimeTag, excerpt, tag, post }) => {
  return (
    <>
      <div className={`col-lg-4 col-md-6 mb-30 item-article ${tag}`}>
        <div className="card-blog-grid card-blog-grid-3 hover-up">
          <div className="card-image">
            <Link href="/blog-detail">
              {/* <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/imgs/page/blog/img6.png"
                loading="lazy"
                alt="iori"
              /> */}

              <FeaturedImage post={post} styleClasses="" priority={false} />
            </Link>
            {/* <Link href="blog">
                    <label className="lbl-border">Writing</label>
                  </Link> */}
          </div>
          <div className="card-info">
            <Link href="/blog-detail">
              <h4 className="color-brand-1">{title}</h4>
            </Link>
            <div className="mb-25 mt-10">
              <span className="font-xs color-grey-500">
                <Date dateString={date} />
              </span>
              <span className="font-xs color-grey-500 icon-read">
                {/* {readTimeTag} */}2 Min Read
              </span>
            </div>
            <div
              className="blog-card-excerpt mt-20"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
