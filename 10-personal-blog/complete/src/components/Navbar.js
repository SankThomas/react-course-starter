import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header className="bg-white text-center py-4 mb-5">
        <nav>
          <ul className="flex items-center justify-center">
            <li className="mr-5">
              <Link
                to="/"
                className="text-purple-700 font-bold tracking-widest"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-purple-700 font-bold tracking-widest"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
