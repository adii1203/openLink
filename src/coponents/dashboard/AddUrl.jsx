import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const AddUrl = ({ setAddurl, setAllUrls, allUrls }) => {
  const [url, setUrl] = useState("");
  const CreateUrl = async () => {
    try {
      const res = await axios(
        "https://server-openlink-production.up.railway.app/user",
        {
          method: "post",
          withCredentials: true,
          data: {
            url,
            userName: "aditya",
          },
        }
      );
      setAllUrls([...allUrls, res.data.link]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[20rem] px-8 py-8 rounded-xl">
        <div className="w-full flex flex-col gap-4">
          <input
            className="flex h-full w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 placeholder:font-semibold focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Ex: instagram.com/adii1203"></input>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={CreateUrl}
            type="button"
            className="items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Create Link
          </button>
          <button
            onClick={() => setAddurl(false)}
            className="px-3 py-2 hover:bg-black/20 rounded-md font-semibold">
            cancle
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUrl;
