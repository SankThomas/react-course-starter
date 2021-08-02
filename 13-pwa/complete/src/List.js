export default function List({ items }) {
  return (
    <>
      <ul className="absolute top-20 right-5 md:right-28 lg:right-96 lg:top-24">
        {items.map(({ id, title }) => (
          <li
            key={id}
            className=" bg-indigo-600 p-2 rounded-md text-white mt-2"
          >
            {title}
          </li>
        ))}
      </ul>
    </>
  )
}
