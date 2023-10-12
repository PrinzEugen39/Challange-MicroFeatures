import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-20 h-fit">
      <Link to="/mobile-legend">
        <button className="btn btn-accent">mobile legend</button>
      </Link>
      <div className="divider"></div>

      <div className="indicator">
        <span className="indicator-item badge badge-primary">new</span>
        <Link to="/currencyconverter">
          <button className="btn btn-accent">currencyconverter</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="indicator">
        <span className="indicator-item badge badge-neutral">WIP</span>
        <button className="btn btn-error">
          <p>Tic Tac Toe</p>
        </button>
      </div>
    </div>
  );
}
