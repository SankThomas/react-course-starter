import { useState, useEffect } from "react"
import QuotesGenerator from "../components/QuotesGenerator"
import List from "./components/List"
import { v4 as uuidv4 } from "uuid"
import CreateTask from "../buttons/CreateTask"

const fetchLocalStorage = () => {
  let tasks = localStorage.getItem("tasks")

  if (tasks) {
    return JSON.parse(localStorage.getItem("tasks"))
  } else {
    return []
  }
}

export default function Tasks() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState(fetchLocalStorage())
  // eslint-disable-next-line
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Your text input seems to be empty")
    } else {
      const newTasks = {
        id: uuidv4(),
        title: text,
      }
      setTasks([newTasks, ...tasks])
      setText("")
    }
  }

  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const clearItems = () => {
    setTasks([])
  }

  const editTask = (id) => {
    const editingTask = tasks.find((task) => task.id === id)
    setTasks(tasks.filter((task) => task.id !== id))
    setIsEditing(true)
    setText(editingTask.title)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <section className="px-5 lg:mx-32 mt-5">
        <h1 className="font-bold uppercase text-xl md:text-2xl lg:text-4xl">
          Your tasks (Plus a random quote)
        </h1>
        <div>
          <QuotesGenerator />
        </div>

        <form
          className="flex flex-wrap items-center justify-between mt-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="text"></label>
          <input
            type="text"
            name="text"
            id="text"
            required
            placeholder="New task"
            className="py-1 px-3 border-2 border-pink-300 rounded placeholder-pink-300 text-pink-500 tracking-wide w-full md:w-1/2 md:mr-auto lg:py-2"
            autoComplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-pink-500 py-1 px-3 rounded text-white tracking-wide border-2 border-pink-500 hover:bg-transparent hover:text-pink-500 transition-all duration-300 w-full mt-2 md:w-auto lg:py-2"
            onClick={handleSubmit}
          >
            <CreateTask />
          </button>
        </form>

        <List
          tasks={tasks}
          deleteItem={deleteItem}
          clearItems={clearItems}
          editTask={editTask}
        />
      </section>
    </>
  )
}
