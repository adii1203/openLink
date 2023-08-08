import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../dashboard/Loading";
import NotFound from "./NotFound";
const UserLinks = () => {
  const { username } = useParams();
  const [allLinks, setAllLinks] = useState([]);
  const [pageNotFound, setPageNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUrls = async () => {
      try {
        setIsLoading(true);
        const res = await axios(`https://server.openurl.me/${username}`, {
          method: "get",
        });
        setAllLinks(res.data);
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 404) {
          setPageNotFound(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getUrls();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="px-2 py-8">
          <Loading />
        </div>
      ) : pageNotFound ? (
        <NotFound username={username} />
      ) : (
        <div className="bg-black/10 h-screen">
          <div className="w-full flex flex-col gap-8 md:w-[80%] md:mx-auto px-2 py-8 lg:w-[40%] lg:mx-auto">
            {allLinks?.map((link) => {
              return (
                <div
                  key={link._id}
                  className=" transition-transform ease-in-out hover:-translate-y-1 duration-[140ms] bg-white shadow-box rounded-md">
                  <div className="">
                    <a
                      target="blank"
                      className="flex items-center w-full text-center font-medium text-lg capitalize"
                      href={link.url}>
                      <div
                        className={`mx-1 my-1 w-[70px]  h-[70px] rounded-md overflow-hidden`}>
                        <img
                          src={link.image}
                          alt=""
                          className="h-full object-cover"
                        />
                      </div>
                      <p className="flex-1">{link.title}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UserLinks;
