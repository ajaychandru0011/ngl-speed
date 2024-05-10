import Link from "next/link";
const BlogSubSection4 = () => {
  return (
    <>
      {" "}
      <div className="col-lg-12">
        <div className="box-ads-1 mb-70">
          <h3 className="color-brand-1 font-shippori title-ads mb-5">
            Get our free marketing books
          </h3>
          <p className="font-xs color-grey-500 mb-10">
            We synthesize all the tips and trends about online marketing in
            valuable books
          </p>
          <Link
            className="btn btn-default font-sm-bold color-grey-900 pl-0"
            href="#"
          >
            Register now
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
    </>
  );
};

export default BlogSubSection4;
