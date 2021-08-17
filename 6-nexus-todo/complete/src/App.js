import { useState, useEffect } from "react"
import List from "./List"
import { v4 as uuidv4 } from "uuid"
import DefaultVideo from "./components/DefaultVideo"
import MoreVideos from "./components/MoreVideos"

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

  const handleCancel = (e) => {
    e.preventDefault()

    setText("")
  }

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
      <section className="bg-indigo-500 flex flex-col text-white px-5 lg:px-10">
        <h1 className="text-center font-bold text-4xl pt-5 pb-10 uppercase tracking-widest lg:text-6xl">
          YouTube Comments
        </h1>

        <div className="flex flex-col lg:flex-row">
          <DefaultVideo />

          <MoreVideos />
        </div>

        <form onSubmit={handleSubmit} autoComplete="off" className="mb-10">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            className="bg-transparent border-b mr-2 p-2 w-full lg:w-1/2"
          />
          <button
            type="reset"
            className="text-gray-100 font-bold tracking-widest rounded-md p-2 uppercase text-sm mt-5 lg:mt-0"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-white text-indigo-500 font-bold tracking-widest rounded-md p-2 uppercase text-sm"
            onClick={handleSubmit}
          >
            Add Comment
          </button>
        </form>

        <div className="w-96 md:w-1/2">
          <List items={list} deleteItem={deleteItem} />
        </div>
      </section>
    </>
  )
}

export default App
