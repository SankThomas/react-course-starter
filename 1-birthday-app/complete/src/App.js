import { useState } from "react"
import { birthdays } from "./birthdays"

const App = () => {
  const [people, setPeople] = useState(birthdays)

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <>
      <section className="main">
        <h1>A simple birthdays App</h1>
        <p className="length">{people.length} people have upcoming birthdays</p>
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
        <button onClick={() => setPeople([])} className="btn-clear">
          Clear List
        </button>
      </section>
    </>
  )
}

export default App
