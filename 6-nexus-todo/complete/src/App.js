import { useState, useEffect } from "react"
import List from "./List"
import { v4 as uuidv4 } from "uuid"

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return JSON.parse(localStorage.getItem("list"))
  } else {
    return []
  }
}

const App = () => {
  const [text, setText] = useState("")
  const [list, setList] = useState(getLocalStorage())

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input cannot be empty")
    } else {
      const newItems = {
        id: uuidv4(),
        title: text,
      }
      setList([newItems, ...list])
      setText("")
    }
  }

  const deleteItem = (id) => {
    setList(list.filter((list) => list.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  return (
    <>
      <section className="bg-gray-300 flex flex-col items-center justify-center h-screen">
        <h1 className="text-center font-bold text-4xl pt-5 pb-10">ToDo App</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add to List</button>
        </form>

        <p className="my-5">You have {list.length} items in your ToDo List</p>

        <div className="w-96">
          <List items={list} deleteItem={deleteItem} />
        </div>
      </section>
    </>
  )
}

export default App
