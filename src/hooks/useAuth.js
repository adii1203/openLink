import axios from "axios";
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
        const res = await axios("http://localhost:3000/auth", {
          method: "get",
          withCredentials: true,
        });
        // console.log(res);
        setUser(res.data.data.user);
        setAccessToken(res.data.data.accessToken);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    isLogedinUser();
  }, []);

  return { isLoading, user, accessToken, setUser };
};

export default useAuth;
