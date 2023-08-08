import { useContext, useEffect, useState } from "react";
import Urls from "./Urls";
import AddUrl from "./AddUrl";
import Profile from "./Profile";
import { axiosPrivateInstance } from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { accessToken, setUser } = useContext(AuthContext);
  const { setAllUrls } = useContext(UserContext);
  const [createLink, setCreateLink] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAllUrls = async () => {
      try {
        setIsLoading(true);

        const res = await axiosPrivateInstance("/api/user", {
          method: "get",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        setAllUrls(res.data.data.links);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllUrls();
  }, []);

  const handelLogout = async () => {
    try {
      const res = await axiosPrivateInstance("/auth/logout", {
        method: "post",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        setUser({});
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // #0e0d14
  return (
    <div className="flex flex-col bg-black/40 bg-dashboard bg-dash_size bg-repeat min-h-screen ">
      <div className=" flex-grow h-full relative">
        <div>
          <Profile handelLogout={handelLogout} />
        </div>
        <div className="w-full">
          <div className="w-full sm:w-[100%] lg:[80%] sm:mx-auto px-4 pt-12 pb-8">
            <Urls isLoading={isLoading} setCreateLink={setCreateLink} />

            {createLink && <AddUrl setCreateLink={setCreateLink} />}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
