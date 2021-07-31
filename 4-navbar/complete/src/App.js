import { useState } from "react"
import { navbar } from "./navbar"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar)

  return (
    <>
      <header>
        <div>
          <h1>Sankara</h1>
        </div>

        {isOpen && (
          <nav>
            <ol>
              {links.map(({ id, title }) => (
                <li key={id} onClick={() => setIsOpen(false)}>
                  {title}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>
      </header>
    </>
  )
}

export default App
