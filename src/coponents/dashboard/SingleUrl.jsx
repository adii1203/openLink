import MoreOpt from "./MoreOpt";

/* eslint-disable react/prop-types */
const SingleUrl = ({ url }) => {
  return (
    <>
      <div>
        <div className="text-white hover:bg-[#211f2d] bg-[#181622] py-2 px-4 rounded-xl sm:w-[100%] lg:w-1/2 mx-auto shadow-box border-[#2d2a36] border">
          <div className="flex items-center justify-between">
            <p className="text-lg font-[500] capitalize">{url.title}</p>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  checked={url.isActive}
                  // onChange={item.isActive}
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500/70"></div>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <a
              className="font-[500] text-sm text-blue-500 underline"
              target="_blanck"
              href={url.url}>
              {url.url}
            </a>
            <button className="group relative hover:bg-[#211f2d] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none">
                <circle
                  cx="18"
                  cy="12"
                  r="1.5"
                  transform="rotate(90 18 12)"
                  fill="#fff"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="1.5"
                  transform="rotate(90 12 12)"
                  fill="#fff"
                />
                <circle
                  cx="6"
                  cy="12"
                  r="1.5"
                  transform="rotate(90 6 12)"
                  fill="#fff"
                />
              </svg>
              <div className=" z-50 hidden group-hover:block absolute top-0 -left-[290%] lg:left-1/2 lg:pt-0 pt-10 lg:pl-16 -ml-4 h-full">
                <MoreOpt />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUrl;
