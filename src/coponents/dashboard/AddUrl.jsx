import { useContext, useEffect, useState } from "react";
// import axios from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const AddUrl = ({ setCreateLink }) => {
  const axiosPrivateInstance = useAxios();
  const { accessToken } = useContext(AuthContext);
  const { allUrls, setAllUrls } = useContext(UserContext);
  const [urlValue, setUrlValue] = useState("");
  const [validUrl, setValidUrl] = useState(false);
  const CreateUrl = async () => {
    try {
      toast.loading("loading...");
      const res = await axiosPrivateInstance("/api/create", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method: "post",
        data: {
          urlValue,
        },
      });
      if (res.status === 200) {
        toast.remove();
        toast.success("success");
        setAllUrls([...allUrls, res.data.data.urlData]);
        setCreateLink(false);
      }
    } catch (error) {
      toast.remove();
      console.log(error);
      toast.error("error");
    }
  };
  const urlRegex =
    /[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  useEffect(() => {
    if (urlRegex.test(urlValue)) {
      setValidUrl(true);
    } else {
      setValidUrl(false);
    }
  }, [urlValue]);

  return (
    <>
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#181823] border border-purple-500/40 w-[20rem] px- py- rounded-xl">
        <div className="text-white text-right pr-4 py-2">
          <button
            onClick={() => setCreateLink(false)}
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
        <div className="mx-4 my-4">
          <div className="w-full flex flex-col gap-4">
            <input
              className="flex h-full w-full text-white rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 placeholder:font-semibold focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              placeholder="Ex: instagram.com/adii1203"></input>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={CreateUrl}
              type="button"
              disabled={!validUrl}
              className=" disabled:cursor-not-allowed disabled:bg-gray-300/50 items-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700">
              Create Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUrl;
