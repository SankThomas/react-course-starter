import { useState } from "react"
import List from "./List"

function App() {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      console.log("Cannot send empty message")
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
        <h1 className="text-center text-4xl my-5 lg:text-6xl">Mad Chatter</h1>
        <form
          onSubmit={handleSubmit}
          className="form absolute bottom-5 w-full mx-auto md:w-9/12 lg:w-1/2"
        >
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Type a message"
            required
            title="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-gray-300 p-2 rounded-l-md"
            autoComplete="off"
            autoCapitalize="on"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="absolute right-0 bg-green-500 text-white p-2 rounded-r-md"
          >
            Send
          </button>
        </form>
        <List items={items} />
      </section>
    </>
  )
}

export default App
