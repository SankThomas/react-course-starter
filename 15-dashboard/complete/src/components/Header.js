import { useState } from "react"
import Dropdown from "./Dropdown"

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <header className="flex items-center justify-between p-5 bg-white shadow">
        <div>
          <h4 className="font-bold lg:text-lg">Welcome back, Thomas</h4>
        </div>

        <div>
          <ul className="flex items-center justify-center">
            <li>
              <button onClick={() => setShowDropdown(!showDropdown)}>
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Someone's profile"
                  className="h-10 w-10 rounded-full border-2 border-pink-600"
                />
              </button>
            </li>
          </ul>
        </div>

        {showDropdown && (
          <article className="absolute right-3 top-24 bg-white py-5 px-10 rounded shadow">
            <Dropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
          </article>
        )}
      </header>
    </>
  )
}
