import { useState } from "react"
import { buttons } from "../buttons"

export default function Buttons() {
  // eslint-disable-next-line
  const [links, setLinks] = useState(buttons)

  return (
    <>
      <ul className="flex items-center justify-start flex-wrap">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className="border-2 border-gray-300 rounded-md m-1 p-2 lg:mx-5 mb-10"
          >
            <button className="text-gray-300">{title}</button>
          </li>
        ))}
      </ul>
    </>
  )
}
