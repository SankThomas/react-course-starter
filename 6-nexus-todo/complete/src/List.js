const List = ({ items, deleteItem }) => {
  return (
    <>
      <div>
        {items.map(({ id, title }) => (
          <ul className="flex items-center justify-between">
            <li key={id} className="my-2 text-lg">
              {title}
            </li>
            <button
              onClick={() => deleteItem(id)}
              className="bg-red-500 py-1 px-6 text-white"
            >
              Edit (Add icon equivalent)
            </button>
          </ul>
        ))}
      </div>
    </>
  )
}

export default List
