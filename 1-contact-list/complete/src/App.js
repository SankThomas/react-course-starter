import { useState } from "react"
import { contacts } from "./contacts"

const App = () => {
  const [people, setPeople] = useState(contacts)
  const [filtered, setFiltered] = useState([])
  const [input, setInput] = useState("")

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  const searchFilter = (searchValue) => {
    setInput(searchValue)

    if (input) {
      const filteredContacts = people.filter((person) =>
        Object.values(person)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredContacts)
    } else {
      setFiltered(people)
    }
  }

  return (
    <>
      {input.length > 1 ? (
        <section className="main">
          <h1>Contact list with filter</h1>
          <p className="length">Showing {people.length} contacts</p>

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search contacts..."
            autoComplete="off"
            onChange={(e) => searchFilter(e.target.value)}
          />

          <div className="main-div">
            {filtered.map(({ id, title, dob }) => (
              <article
                key={id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <div>
                  <h4>{title}</h4>
                  <p>{dob}</p>
                </div>
                <button onClick={() => handleDelete(id)} className="btn-delete">
                  Remove
                </button>
              </article>
            ))}
          </div>
          {people.length > 0 && (
            <button onClick={() => setPeople([])} className="btn-clear">
              Clear List
            </button>
          )}
        </section>
      ) : (
        <section className="main">
          <h1>Contact list with filter</h1>
          <p className="length">Showing {people.length} contacts</p>

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search contacts..."
            autoComplete="off"
            onChange={(e) => searchFilter(e.target.value)}
          />

          <div className="main-div">
            {people.map(({ id, title, dob }) => (
              <article
                key={id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <div>
                  <h4>{title}</h4>
                  <p>{dob}</p>
                </div>
                <button onClick={() => handleDelete(id)} className="btn-delete">
                  Remove
                </button>
              </article>
            ))}
          </div>
          {people.length > 0 && (
            <button onClick={() => setPeople([])} className="btn-clear">
              Clear List
            </button>
          )}
        </section>
      )}
    </>
  )
}

export default App
