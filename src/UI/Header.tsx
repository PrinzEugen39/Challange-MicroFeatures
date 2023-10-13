import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="justify-around navbar bg-gradient-to-r from-lime-400 to-green-700">
      <div className="">
        <Link to="/" className="">
          <span className="text-xl normal-case btn btn-ghost">
            Prinz Micro Features.
          </span>
        </Link>
      </div>
      {location.pathname !== "/" && (
        <div className="flex gap-4">
          <button
            className="inline-block px-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full bg-lime-100 text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
            onClick={() => navigate("/")}
          >
            <FiArrowLeft className="text-2xl" />
          </button>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 btn">
              Menu
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
            >
              <li>
                <Link to="/mobile-legend">Mobile Legend</Link>
              </li>
              <li>
                <Link to="/currency">Currency Converter</Link>
              </li>
              <li>
                <Link to="/meme">Meme Generator</Link>
              </li>
              <li>
                <Link to="/salary">Salary Calculator</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div> 
  );
}
