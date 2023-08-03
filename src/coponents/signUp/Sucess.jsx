import { Link } from "react-router-dom";

const Sucess = () => {
  return (
    <div className="h-screen grid place-content-center">
      <div className="text-white">
        <p>sucess go to login page</p>
        <Link to={"/login"}>login</Link>
      </div>
    </div>
  );
};

export default Sucess;
