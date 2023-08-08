import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
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
        const res = await axios(`/${username}`, {
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
        <div className="bg-[#0e0d14] flex flex-col">
          <div className=" div ">
            <div className=" w-full flex flex-col gap-4 md:w-[80%] md:mx-auto px-2 py-8 lg:w-[40%] lg:mx-auto">
              {allLinks?.map((link) => {
                return (
                  <div
                    key={link._id}
                    className=" transition-transform ease-in-out hover:-translate-y-1 duration-[140ms] bg-white/95 shadow-box rounded-md">
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

          <div className=" fixed bottom-0 w-full mb-3">
            <div className=" text-sm capitalize font-medium justify-between items-center py-2  px-4 text-white bg-[#211f2d] mx-2 rounded-md sm:flex ">
              <div className="grid md:gap-2 sm:py-3">
                <p>
                  made by{" "}
                  <a
                    className="text-purple-400 hover:underline"
                    href="https://linkedin.com/in/aditya1203">
                    aditya
                  </a>{" "}
                  with ❤️
                </p>
                <div className="flex gap-1">
                  <p>create your own</p>
                  <a
                    href="https://openurl.me"
                    className="text-purple-400 hover:underline">
                    openurl profile.
                  </a>
                </div>
              </div>
              <div className="flex gap-1">
                <p>found bug? create issue on</p>
                <a
                  target="blank"
                  rel="create issue on github"
                  href="https://github.com/adii1203/openLink/issues/new"
                  className="text-purple-400 hover:underline">
                  github.
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserLinks;
