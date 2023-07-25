const Dashboard = () => {
  return (
    <div className="bg-[#191919] h-screen relative">
      <Page />
      <div className="">
        <Nav />
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full sm:w-[70%] sm:mx-auto px-4 pt-12 pb-8">
        <div className="relative flex justify-end after:-bottom-2 after:absolute after:w-full after:h-[1.5px] after:rounded after:bg-[#4f4f4f]">
          <button className="flex gap-2 text-white hover:bg-[#2d2d2d] transition-colors px-8 py-2 rounded-3xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                fill="currentColor"
              />
            </svg>
            <p className="capitalize font-semibold">link</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max">
      <div className=" flex items-center gap-8 bg-white px-4 py-1 rounded-lg">
        <div className="w-12">
          <img
            className="rounded-full bg-black"
            src="https://robohash.org/3"
            alt=""
          />
        </div>
        <div className="flex gap-4 text-black font-mono font-semibold">
          <p>home</p>
          <p>setting</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
