import { useState } from "react";

const Profile = ({ handelLogout }) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="w-screen">
      <div className="relative px-4 py-4 sm:w-[100%] lg:w-[70%] mx-auto flex justify-end">
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-2">
          <div className="ring-offset-2 ring-2  ring-purple-500 ring-offset-black w-[35px] rounded-full overflow-hidden">
            <img
              className="object-cover"
              src="https://scontent.cdninstagram.com/v/t51.2885-19/363293947_841741510624736_5647582590417937457_n.jpg?stp=dst-jpg_s100x100&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4o-Tb44ozhAAX_RcyT6&_nc_ht=scontent.cdninstagram.com&oh=00_AfARwBnyAvynY0MLi8qaUOAxrBx0N1POuH1q8Fvholys_Q&oe=64D539EC"
              alt=""
            />
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
              fill="gray"
            />
          </svg>
        </button>

        {showProfile && (
          <div className=" absolute -bottom-[140%] lg:-right-[15%]">
            <div className="rounded-md  border-gray-400 border bg-[#13111c] py-2 px-2 ">
              <ul className="text-white text-left w-[8rem] sm:w-[12rem] lg:w-[16rem] grid gap-2">
                <li className="hover:bg-gray-400/10 py-1 px-2 rounded lg:px-4 font-medium opacity-[0.5] hover:opacity-100">
                  <button className="flex items-center capitalize gap-3 w-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p>profile</p>
                  </button>
                </li>
                <li className=" hover:bg-gray-400/10 py-1 px-2 lg:px-4 rounded font-medium opacity-[0.5] hover:opacity-100 text-red-500">
                  <button
                    onClick={handelLogout}
                    className=" flex items-center capitalize gap-2 w-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        className=" fill-red-500"
                        d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                      />
                      <path
                        className="fill-red-500"
                        d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                      />
                    </svg>
                    <p>logout</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
