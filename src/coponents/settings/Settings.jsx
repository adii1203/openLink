import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserdata] = useState({ ...user });
  return (
    <>
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
      <div className="pt-8 lg:pt-0">
        <section>
          <div className="w-full px-4 lg:w-[60%] md:mx-auto py-8">
            <p className="text-white capitalize text-2xl font-semibold border-b-2 border-white/20 pb-4">
              general setting
            </p>

            <div className="mt-12">
              <form className="">
                <div>
                  <label htmlFor="image" className="relative">
                    <div className=" rounded-full overflow-hidden w-fit mx-auto">
                      <img
                        src="https://scontent.cdninstagram.com/v/t51.2885-19/363293947_841741510624736_5647582590417937457_n.jpg?stp=dst-jpg_s100x100&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4o-Tb44ozhAAX_RcyT6&_nc_ht=scontent.cdninstagram.com&oh=00_AfARwBnyAvynY0MLi8qaUOAxrBx0N1POuH1q8Fvholys_Q&oe=64D539EC"
                        alt=""
                      />
                      <div className=" absolute left-1/2 -bottom-2 w-[24px] h-[24px] grid place-content-center bg-white rounded-full ">
                        <svg
                          className="bottom-0 z-40"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                  <input className="hidden" type="file" name="" id="image" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full flex flex-col gap-3 lg:w-1/2 mx-auto">
                    <label
                      className="text-sm text-white/60 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="username">
                      Username
                    </label>
                    <input
                      className="flex h-10 w-full text-white font-[500] text-lg rounded-md border border-white/40 hover:border-white bg-transparent px-3 py-2 placeholder:text-gray-200/30 focus:outline-none focus:ring-1 focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={userData.userName}
                      placeholder="username"
                      id="name"></input>
                  </div>
                  <div className="w-full flex flex-col gap-3 lg:w-1/2 mx-auto">
                    <label
                      className="text-sm text-white/60 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name">
                      Name
                    </label>
                    <input
                      className="flex h-10 w-full text-white font-[500] text-lg rounded-md border border-white/40 hover:border-white bg-transparent px-3 py-2 placeholder:text-gray-200/30 focus:outline-none focus:ring-1 focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Name"
                      id="name"></input>
                  </div>
                  <div className="w-full flex flex-col gap-3 lg:w-1/2 mx-auto">
                    <label
                      className="text-sm text-white/60 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email">
                      Email
                    </label>
                    <input
                      className=" flex h-10 w-full text-white font-[500] text-lg rounded-md border border-white/40 hover:border-white bg-transparent px-3 py-2 placeholder:text-gray-200/30 focus:outline-none focus:ring-1 focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={userData.email}
                      placeholder="Email"
                      id="email"></input>
                  </div>
                </div>

                <div className="mt-4 lg:w-1/2 mx-auto">
                  <button className="hover:bg-purple-900 transition-colors text-white font-medium bg-purple-600 py-3 w-full rounded-md">
                    update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full px-4 lg:w-[60%] md:mx-auto py-8">
            <p className="text-red-500 capitalize text-2xl font-semibold border-b-2 border-red-500/20 pb-4">
              danger zone
            </p>
            <div className="mt-4">
              <button className="text-white capitalize font-semibold text-[16.8px] bg-red-600 px-3 py-3 rounded-md hover:bg-red-600/80">
                delete account
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Settings;
