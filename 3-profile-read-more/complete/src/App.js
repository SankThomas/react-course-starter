import { useState } from "react"
import People from "./People"
import { profiles } from "./profiles"

function App() {
  // eslint-disable-next-line
  const [people, setPeople] = useState(profiles)

  return (
    <>
      <section className="main">
        {people.map((person) => (
          <People key={person.id} {...person} />
        ))}
      </section>
    </>
  )
}

export default App
