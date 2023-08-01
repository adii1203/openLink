import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home  h-screen bg-[#13111c] ">
      <Header />
      <section className="">
        <div className="mt-24">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-white font-semibold text-4xl sm:text-5xl capitalize">
              Unleash your online presence <br /> with ease.
            </p>
            <Link
              className="button capitalize transition-transform hover:scale-125 bg-purple-600 w-max px-16 rounded text-white font-medium py-3 mt-8 block"
              to={"/signup"}>
              sign up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <Link
        className="bg-purple-600 w-max px-12 rounded text-white font-medium py-1"
        to={"/login"}>
        login
      </Link>
      <Link
        className="bg-purple-600 w-max px-12 rounded text-white font-medium py-1"
        to={"/signup"}>
        sign up
      </Link>
      <Link
        className="bg-purple-600 w-max px-12 rounded text-white font-medium py-1"
        to={"/dashboard"}>
        dashboard
      </Link> */
}
