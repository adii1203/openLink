import MoreOpt from "./MoreOpt";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

/* eslint-disable react/prop-types */
const SingleUrl = ({ url, click, show }) => {
  const { updateVisibel } = useContext(UserContext);

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
                  onChange={() => updateVisibel(url._id, url.isActive)}
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
            <div className="relative ">
              <button
                onClick={() => click(url._id)}
                className="hover:bg-white/20 rounded-full">
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
              </button>
              <div>
                {show.includes(url._id) && (
                  <div className=" z-50 absolute -left-[290%] lg:top-0 lg:left-[5rem]  -ml-4 h-full">
                    <MoreOpt url={url} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUrl;
