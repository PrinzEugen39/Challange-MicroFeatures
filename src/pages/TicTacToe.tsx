export default function TicTacToe() {
  let data = ["", "", "", "", "", "", "", "", ""];

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="pt-10 px-14 pb-14 bg-slate-100/70 rounded-xl">
        <p className="mb-5 text-2xl font-bold text-center text-purple-400 hover:text-pink-600">
          Tic Tac Toe
        </p>
        <div className="">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
      <div className="flex flex-col">
        <span>Winner is X</span>
        <span>Draw</span>
        <button className="text-center btn btn-secondary">Reset</button>
      </div>
    </div>
  );
}

function Square() {
  return (
    <button className="w-12 h-10 font-bold border border-black btn btn-success">
      X
    </button>
  );
}
