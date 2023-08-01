import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="pt-4 px-8 text-right">
        <Link
          className="bg-purple-600 w-max px-10 rounded text-white font-medium py-2"
          to={"/login"}>
          login
        </Link>
      </div>
    </>
  );
};

export default Header;
