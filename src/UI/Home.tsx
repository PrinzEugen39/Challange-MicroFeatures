import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-20 h-fit">
      <Link to="/mobile-legend">
        <button className="btn btn-accent">mobile legend</button>
      </Link>
      <div className="divider"></div>

      <div className="indicator">
        <Link to="/currencyconverter">
          <button className="btn btn-error">currency converter</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="indicator">
        <span className="indicator-item badge badge-primary">WIP</span>
        <Link to="/tictactoe">
          <button className="btn btn-warning">
            <p>Tic Tac Toe</p>
          </button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="indicator">
        <Link to="/meme">
          <button className="btn btn-error">Meme generator</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="indicator">
        <span className="indicator-item badge badge-primary">new</span>
        <Link to="/salary">
          <button className="btn btn-accent">Salary Calculator</button>
        </Link>
      </div>
    </div>
  );
}
