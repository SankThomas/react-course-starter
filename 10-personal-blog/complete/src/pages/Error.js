import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl lg:text-6xl uppercase tracking-widest mb-5 font-bold">
        Error 404 | Page Not Found
      </h1>
      <Link
        to="/"
        className="bg-white text-indigo-500 py-2 px-6 rounded tracking-widest font-semibold mt-5 block border-2 border-white hover:bg-transparent hover:text-white select-none"
      >
        Back to homepage
      </Link>
    </div>
  )
}
