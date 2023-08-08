import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Edit = () => {
  const navigate = useNavigate();
  const { urlData } = useLocation().state;
  const { updateTitleAndUrl } = useContext(UserContext);
  const [data, setData] = useState(urlData);
  return (
    // <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 ">
    <>
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#181823] border border-purple-500/40 w-[20rem] px- py- rounded-xl">
        <div className="text-white text-right pr-4 py-2">
          <button
            onClick={() => {
              navigate("/");
            }}
            className=" w-6 h-6 hover:bg-white/20 rounded-md font-semibold">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="mx-4 pb-4 grid gap-3">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="" className="text-white text-[16.8px] font-medium">
              Title
            </label>
            <input
              className="flex h-full w-full text-white rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-200/40 placeholder:font-semibold focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              value={data?.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Title"></input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="" className="text-white text-[16.8px] font-medium">
              Url
            </label>
            <input
              className="flex h-full w-full text-white rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-200/40 placeholder:font-semibold focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              value={data.url}
              onChange={(e) => setData({ ...data, url: e.target.value })}
              placeholder="Url"></input>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => updateTitleAndUrl(data)}
              type="button"
              //   disabled={!validUrl}
              className=" disabled:cursor-not-allowed disabled:bg-gray-300/50 items-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Edit;
