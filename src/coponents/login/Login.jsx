import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [isLoadign, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const res = await axios("http://localhost:3000/login", {
        method: "post",
        withCredentials: true,
        data: userData,
      });
      console.log(res);
      setUser(res.data.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section>
        <Link
          className="m-4 flex w-max items-center transition-colors text-[gray] hover:bg-black/10 px-4 py-2 rounded-3xl text-lg font-semibold absolute"
          to={"/"}>
          <svg
            className="inline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.3639 7.75735L16.9497 6.34314L11.2929 12L16.9497 17.6568L18.3639 16.2426L14.1213 12L18.3639 7.75735Z"
              fill="gray"
            />
            <path
              d="M11.2929 6.34314L12.7071 7.75735L8.46447 12L12.7071 16.2426L11.2929 17.6568L5.63605 12L11.2929 6.34314Z"
              fill="gray"
            />
          </svg>
          Home
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center h-screen">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Log in
              </h2>
              <p className="mt-2 text-base text-gray-200">
                {`Don't have an account? `}
                <Link
                  to={"/signup"}
                  title=""
                  className="font-medium text-white transition-all duration-200 hover:underline">
                  Create One
                </Link>
              </p>
              <form className="mt-8">
                <div className="space-y-5 w-[20rem] lg:w-full">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-200">
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        value={userData.userName}
                        onChange={(e) =>
                          setUserData({ ...userData, userName: e.target.value })
                        }
                        placeholder="Username"
                        id="email"></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-200">
                        {" "}
                        Password{" "}
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-white hover:underline">
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={isLoadign}
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                        type="password"
                        placeholder="Password"
                        id="password"></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      disabled={isLoadign}
                      onClick={handleLogin}
                      className=" disabled:cursor-not-allowed disabled:opacity-50 inline-flex w-full items-center justify-center rounded-md bg-purple-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-purple-600/80">
                      Log in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-screen hidden w-full lg:flex lg:items-center lg:border lg:justify-center ">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1682588382150-5fd116b4da54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=422&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
