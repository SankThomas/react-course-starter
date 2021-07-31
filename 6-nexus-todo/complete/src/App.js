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
      <section className="bg-indigo-500 flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-center font-bold text-4xl pt-5 pb-10 uppercase tracking-widest lg:text-6xl">
          YouTube Comments
        </h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            className="bg-transparent border-b mr-2 p-2"
          />
          <button
            type="submit"
            className="bg-white text-indigo-500 font-bold tracking-widest rounded-md p-2 uppercase text-sm"
          >
            Add Comment
          </button>
        </form>

        <p className="my-5 text-left">
          You have {list.length} items in your ToDo List
        </p>

        <div className="w-96 md:w-1/2">
          <List items={list} deleteItem={deleteItem} />
        </div>
      </section>
    </>
  )
}

export default App
