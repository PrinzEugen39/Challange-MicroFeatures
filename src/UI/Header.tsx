import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-4 py-4 font-sans font-semibold tracking-widest uppercase bg-green-500 shadow-sm sm:px-12">
      <Link to="/" className="">
        Prinz Micro Features.
      </Link>
      {location.pathname !== "/" && (
        <button
          className="inline-block px-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full bg-lime-100 text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft className="text-2xl" />
        </button>
      )}
    </header>
  );
}
