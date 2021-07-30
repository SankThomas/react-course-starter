export default function List({ items }) {
  return (
    <>
      <ul>
        {items.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  )
}
