import { useState } from "react"
import People from "./People"
import { profiles } from "./profiles"

function App() {
  // eslint-disable-next-line
  const [people, setPeople] = useState(profiles)

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Profile Read More</h1>
      <section className="main">
        {people.map((person) => (
          <People key={person.id} {...person} />
        ))}
      </section>
    </>
  )
}

export default App
