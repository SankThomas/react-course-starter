import { MdDelete } from "react-icons/md"
import ClearItems from "../../buttons/ClearItems"

export default function List({ tasks, deleteItem, clearItems }) {
  return (
    <>
      <h2>You have {tasks.length} tasks left to complete</h2>
      {tasks.length !== 0 && (
        <article className="bg-white rounded py-3 px-5 shadow mt-5">
          <ol className="list-decimal">
            {tasks.map(({ id, title }) => (
              <div className="flex items-center justify-between border-b">
                <li key={id} className="my-2">
                  {title}
                </li>
                <button onClick={() => deleteItem(id)}>
                  <MdDelete
                    className="text-red-500 text-xl"
                    title="Delete item"
                  />
                </button>
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
