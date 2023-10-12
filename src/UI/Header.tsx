import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 font-sans font-semibold tracking-widest uppercase bg-green-500 border-b border-stone-200 sm:px-6">
      <Link to="/" className="">
        Prinz Micro Features.
      </Link>
    </header>
  )
}
