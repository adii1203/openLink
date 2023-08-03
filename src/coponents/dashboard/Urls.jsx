/* eslint-disable react/prop-types */
// import Loading from "./Loading";
import SingleUrl from "./SingleUrl";
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const Urls = ({ isLoading, allUrls, setCreateLink }) => {
  return (
    <div className="mt-8 px-4 py-4 flex flex-col gap-4 sm:justify-start">
      <div>
        <div className="sm:w-[100%] lg:w-1/2 mx-auto mb-8 ">
          <button
            onClick={() => setCreateLink(true)}
            className="flex justify-center gap-2 w-full text-white bg-black/10 outline outline-[.567px] outline-purple-500 hover:bg-purple-500/20 transition-colors py-2 rounded">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                fill="currentColor"
              />
            </svg>
            <p className="capitalize font-semibold">link</p>
          </button>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : allUrls?.length ? (
        allUrls?.map((url) => {
          return <SingleUrl url={url} key={url._id} />;
        })
      ) : (
        <div className="text-white capitalize text-lg font-semibold text-center">
          you do not have links yet
        </div>
      )}
    </div>
  );
};

export default Urls;
