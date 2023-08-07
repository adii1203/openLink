import axios from "../api/axios";
import { useEffect } from "react";
import { useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const isLogedinUser = async () => {
      try {
        setIsLoading(true);
        const res = await axios("/auth/verify", {
          method: "get",
          withCredentials: true,
        });

        setUser(res.data.data.user);
        setAccessToken(res.data.data.accessToken);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    isLogedinUser();
  }, [user]);

  return { isLoading, user, accessToken, setUser, setAccessToken };
};

export default useAuth;
