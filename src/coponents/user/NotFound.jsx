import { NavLink } from "react-router-dom";

const NotFound = ({ username }) => {
  return (
    <div className="h-screen grid place-content-center">
      <div>
        <div className="text-center text-4xl font-[800] text-purple-600">
          404
        </div>
        <p className="text-white capitalize text-2xl font-[700]">{`looks like the user dose't exist`}</p>

        <NavLink
          className="text-center block text-purple-500 font-semibold capitalize hover:underline"
          to={"/signup"}
          state={{ username: username }}>
          claim username
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
