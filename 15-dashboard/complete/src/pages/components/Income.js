import { useState } from "react"

const data = [
  {
    id: 1,
    title: "Income",
    value: "75,000",
  },
  {
    id: 2,
    title: "Sales",
    value: "150,000",
  },
  {
    id: 3,
    title: "Users",
    value: "4,000",
  },
  {
    id: 4,
    title: "Orders",
    value: "2,000",
  },
]

export default function Income() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)

  return (
    <>
      <section>
        <h2 className="text-xl mb-3">Income</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map(({ id, title, value }) => (
            <article
              key={id}
              className="income__cards bg-white p-5 rounded shadow"
            >
              <h3 className="text-gray-500">{title}</h3>
              <p className="font-bold text-gray-900 text-4xl 2xl:text-5xl">
                {value}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
