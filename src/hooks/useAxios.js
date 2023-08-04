import { useContext, useEffect } from "react";
import { axiosPrivateInstance } from "../api/axios";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";
const useAxios = () => {
  const { setAccessToken } = useContext(AuthContext);
  useEffect(() => {
    const responseIntersepter = axiosPrivateInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;

        if (error.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const res = await axios("/auth/refreshToken", {
            method: "get",
          });
          setAccessToken(res.data);
          prevRequest.headers["Authorization"] = `Bearer ${res.data}`;

          return axiosPrivateInstance(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () =>
      axiosPrivateInstance.interceptors.response.eject(responseIntersepter);
  }, []);

  return axiosPrivateInstance;
};

export default useAxios;
