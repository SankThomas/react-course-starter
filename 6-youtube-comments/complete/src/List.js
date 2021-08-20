const List = ({ items, deleteItem }) => {
  return (
    <>
      <div className="mb-10 w-full">
        {items.map(({ id, title }) => (
          <ul className="flex items-center justify-between">
            <li key={id} className="my-2 text-lg">
              {title}
            </li>
            <div>
              <button
                onClick={() => deleteItem(id)}
                className="bg-red-500 py-1 px-6 text-white"
              >
                Delete
              </button>
            </div>
          </ul>
        ))}
      </div>
    </>
  )
}

export default List
