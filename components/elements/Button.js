import Link from "next/link";
const Button = ({
  text,
  showIcon,
  href,
  onClick,
  target,
  customBtnSize = true,
}) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className="hover-up btn btn-brand-1"
          style={{ padding: "16px 20px" }}
          target={target}
        >
          {text}
          {showIcon && (
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
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          )}
        </Link>
      ) : (
        <button
          className={`btn btn-brand-1-full hover-up ${
            customBtnSize ? "custom-btn-size" : ""
          }`}
          onClick={onClick}
        >
          {text}
          {showIcon && (
            <>
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
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
