import { useState } from "react"
import List from "./List"

function App() {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      console.log("Input is empty")
      alert("Input is empty")
    } else {
      const newItems = {
        id: new Date().getTime().toString(),
        title: text,
      }
      setItems([...items, newItems])
      setText("")
    }
  }

  return (
    <>
      <section>
        <h1>Nexus</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Enter your todo item</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
        <List items={items} />
      </section>
    </>
  )
}

export default App
