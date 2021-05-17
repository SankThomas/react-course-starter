import { useState } from "react"
import { Link } from "react-router-dom"
import { BiMenuAltLeft } from "react-icons/bi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header>
        {isOpen && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        )}

        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltLeft />
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
