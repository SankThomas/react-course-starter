import { useState, useEffect } from "react"

const url = `https://randomuser.me/api/`

function App() {
  const [people, setPeople] = useState([])

  const fetchPeopleData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setPeople(data.results)
  }

  useEffect(() => {
    fetchPeopleData()
  }, [])

  return (
    <>
      <h1 className="font-bold text-xl mb-5 mt-20 text-center lg:text-3xl">
        Let's fetch some random users
      </h1>
      <section className="flex flex-col items-center justfy-center text-center">
        {people.map(
          ({
            name: { title, first, last },
            location: {
              street: { number, name },
            },
            email,
            login: { uuid },
            picture: { large },
          }) => (
            <article
              key={uuid}
              className="bg-gray-200 p-5 rounded shadow-lg md:w-96"
            >
              <img
                src={large}
                alt={first}
                className="block mx-auto mb-5 rounded-full"
              />
              <h4 className="text-4xl mb-5">
                {title}. {first} {last}
              </h4>
              <ul>
                <h5 className="font-bold">Street</h5>
                <li>
                  <span>Number: </span>
                  {number}
                </li>
                <li>
                  <span>Street Name: </span>
                  {name}
                </li>
              </ul>
              <p className="mt-5">{email}</p>
            </article>
          )
        )}
        <button
          className="mt-10 bg-gray-200 p-2 rounded hover:bg-gray-400 transition-all duration-500"
          onClick={() => fetchPeopleData()}
        >
          Get another user
        </button>
      </section>
    </>
  )
}

export default App
