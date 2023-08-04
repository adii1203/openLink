// import { ArrowRight } from "lucide-react";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sucess from "./Sucess";

export function Signup() {
  const [userName, setUsername] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    const findUserName = async () => {
      try {
        setLoading(true);
        const res = await axios("/auth/findUsername", {
          method: "get",
          headers: {
            username: userName,
          },
        });
        setUsernameExist(!res.data.data.avilable);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    findUserName();
  }, [userName]);

  const handleSignin = async () => {
    const { email, password } = details;
    if (email && password === "") {
      console.log("all fields are required");
    } else {
      try {
        const res = await axios("/auth/signin", {
          method: "post",
          data: {
            email: details.email,
            password: details.password,
            userName: userName,
          },
        });
        if (res.status === 200) {
          setSucess(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section>
      <Link
        className="m-4 flex w-max items-center transition-colors text-[gray] hover:bg-white/10 px-4 py-2 rounded-3xl text-lg font-semibold absolute"
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
      {sucess ? (
        <Sucess />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center h-screen">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Sign up
              </h2>
              <p className="mt-2 text-base text-gray-200">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  title=""
                  className="font-medium text-white transition-all duration-200 hover:underline">
                  Sign In
                </Link>
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8">
                <div className="space-y-5 w-[20rem] lg:w-full">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-200">
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        autoComplete="none"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        id="name"></input>
                      {userName && (
                        <>
                          {loading ? (
                            <svg
                              className="animate-spin mt-2"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                opacity="0.2"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                fill="currentColor"
                              />
                              <path
                                d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                                fill="#fff"
                              />
                            </svg>
                          ) : usernameExist ? (
                            <div className="text-sm font-medium text-red-400 ">
                              user name is not avilable
                            </div>
                          ) : (
                            <div className="text-sm font-medium text-green-400 ">
                              user name is avilable
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-200">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        value={details.email}
                        onChange={(e) =>
                          setDetails({ ...details, email: e.target.value })
                        }
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
                    </div>
                    <div className="mt-2">
                      <input
                        className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        value={details.password}
                        onChange={(e) =>
                          setDetails({ ...details, password: e.target.value })
                        }
                        id="password"></input>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleSignin}
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-purple-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-purple-600/80">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-screen hidden w-full lg:flex lg:items-center lg:justify-center ">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src="https://img.freepik.com/free-photo/astronaut-explores-outer-dark-space-generative-al_169016-28607.jpg?w=740&t=st=1690743510~exp=1690744110~hmac=adc05b6823958e7e6d444873e97c2c9b80b780ae0d8af5c3488dcafffad4e4ae"
              alt=""
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Signup;
