import { useState } from "react"
import Chart from "./components/Chart"
import Income from "./components/Income"

const data = [
  {
    id: 1,
    title: "Vehicles",
    number: 478,
  },
  {
    id: 2,
    title: "Parking spots",
    number: 600,
  },
  {
    id: 3,
    title: "Vans",
    number: 300,
  },
  {
    id: 4,
    title: "Misc",
    number: 100,
  },
]

export default function Dashboard() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)

  return (
    <>
      <section className="gap-5 p-5 lg:pl-32">
        <h1 className="text-xl mb-3">Your Dashboard</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ id, title, number }) => (
            <article key={id} className="bg-white p-5 rounded shadow">
              <h3 className="text-gray-500">{title}</h3>
              <p className="font-bold text-gray-900 text-4xl 2xl:text-5xl">
                {number}
              </p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <Chart />

          <Income />
        </div>
      </section>
    </>
  )
}
