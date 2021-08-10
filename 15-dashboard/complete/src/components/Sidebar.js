import { GrFacebook } from "react-icons/gr"
import { CgInstagram, CgTwitter } from "react-icons/cg"
import { FiHome, FiSettings } from "react-icons/fi"
import { FaTasks } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <>
      <aside className="absolute left-0 top-22 bg-white py-5 px-10 h-screen hidden lg:block shadow">
        <ul className="flex flex-col items-center justify-center">
          <NavLink
            to="/"
            exact
            className="text-gray-500 mb-10 text-2xl"
            activeClassName="text-pink-500"
            title="Homepage"
          >
            <li>
              <FiHome />
            </li>
          </NavLink>
          <NavLink
            to="/tasks"
            className="text-gray-500 text-2xl mb-10"
            activeClassName="text-pink-500"
            title="Your tasks"
          >
            <li>
              <FaTasks />
            </li>
          </NavLink>
          <NavLink
            to="/settings"
            className="text-gray-500 text-2xl"
            activeClassName="text-pink-500"
            title="Settings"
          >
            <li>
              <FiSettings />
            </li>
          </NavLink>
        </ul>

        <ul className="fixed bottom-5 flex items-center -ml-6">
          <li className="mx-1">
            <a href="https://facebook.com">
              <GrFacebook className="text-blue-600 text-lg" title="Facebook" />
            </a>
          </li>
          <li className="mx-1">
            <a href="https://instagram.com/tsbsankara">
              <CgInstagram
                className="text-pink-500 text-lg"
                title="Instagram"
              />
            </a>
          </li>
          <li className="mx-1">
            <a href="https://twitter.com/TSBSankara">
              <CgTwitter className="text-blue-500 text-lg" title="Twitter" />
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}
