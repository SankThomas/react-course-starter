import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold uppercase text-xl md:text-2xl">
          Error 404 | Page Not Found
        </h1>
        <button className="mt-5">
          <Link
            to="/"
            className="bg-pink-500 py-3 px-6 rounded text-white tracking-widest mt-5 border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 transition-all duration-300"
          >
            Back to Homepage
          </Link>
        </button>
      </section>
    </>
  )
}
