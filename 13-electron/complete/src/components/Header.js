import { BiCoffeeTogo } from "react-icons/bi"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between py-2 px-2 sm:px-5">
        <div className="logo">
          <h2 className="text-4xl text-gray-600 md:text-6xl">
            <BiCoffeeTogo />
          </h2>
        </div>

        <nav>
          <Navbar />
        </nav>
      </header>
    </>
  )
}
