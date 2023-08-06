import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import useAxios from "../hooks/useAxios";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const axiosPrivateInstance = useAxios();
  const { accessToken } = useContext(AuthContext);
  const [allUrls, setAllUrls] = useState([]);

  const updateVisibel = async (id, isActive) => {
    const item = allUrls.map((url) =>
      url._id === id ? { ...url, isActive: !isActive } : url
    );
    setAllUrls(item);
    try {
      const res = await axiosPrivateInstance(`/api/offSwitch/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method: "patch",
        data: {
          isActive: isActive,
        },
      });
    } catch (error) {
      if (error.status === 403) {
        const item = allUrls.map((url) =>
          url._id === id ? { ...url, isActive: isActive } : url
        );
        setAllUrls(item);
      }
    }
  };

  const deleteUrl = async (url) => {
    const filterUtl = allUrls.filter((item) => item._id != url._id);
    setAllUrls(filterUtl);
    try {
      const res = await axiosPrivateInstance(`/api/deleteurl/${url._id}`, {
        method: "delete",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        updateVisibel,
        allUrls,
        setAllUrls,
        deleteUrl,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
