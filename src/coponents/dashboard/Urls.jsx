/* eslint-disable react/prop-types */
// import Loading from "./Loading";
import SingleUrl from "./SingleUrl";

// eslint-disable-next-line react/prop-types
const Urls = ({ allUrls }) => {
  return (
    <div className="mt-8 px-4 py-4 flex flex-col gap-4">
      {/* <Loading /> */}
      {allUrls?.length ? (
        allUrls?.map((url) => {
          return <SingleUrl url={url} key={url._id} />;
        })
      ) : (
        <div className=" capitalize text-lg font-semibold text-center">
          you do not have links yet
        </div>
      )}
    </div>
  );
};

export default Urls;
