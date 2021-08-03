import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl lg:text-6xl uppercase tracking-widest mb-5 font-bold">
          Call Me Maybe
        </h1>
        <p>So you like to read? Check out my blog</p>
        <div>
          <ul>
            <li>
              <Link
                to="/blog"
                className="bg-white text-indigo-500 py-2 px-6 rounded tracking-widest font-semibold mt-5 block border-2 border-white hover:bg-transparent hover:text-white select-none"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Homepage
