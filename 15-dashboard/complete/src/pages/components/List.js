import { MdDelete, MdEdit } from "react-icons/md"
import ClearItems from "../../buttons/ClearItems"

export default function List({ tasks, deleteItem, clearItems, editTask }) {
  return (
    <>
      <h2>You have {tasks.length} tasks left to complete</h2>
      {tasks.length !== 0 && (
        <article className="bg-white rounded py-3 pr-5 pl-10 shadow mt-5">
          <ol className="list-decimal">
            {tasks.map(({ id, title }) => (
              <div className="flex items-center justify-between border-b">
                <li key={id} className="my-2">
                  {title}
                </li>
                <div>
                  <button onClick={() => editTask(id)} className="p-1">
                    <MdEdit
                      className="text-green-500 text-xl mr-2 hover:bg-green-200 rounded hover:shadow transition-all duration-300"
                      title="Edit item"
                    />
                  </button>
                  <button onClick={() => deleteItem(id)} className="p-1">
                    <MdDelete
                      className="text-red-500 text-xl hover:bg-red-200 rounded hover:shadow transition-all duration-300"
                      title="Delete item"
                    />
                  </button>
                </div>
              </div>
            ))}
          </ol>
          <button onClick={clearItems}>
            <ClearItems />
          </button>
        </article>
      )}
    </>
  )
}
