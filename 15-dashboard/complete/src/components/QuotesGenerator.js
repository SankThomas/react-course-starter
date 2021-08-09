import { useState, useEffect } from "react"

const url = `https://api.chucknorris.io/jokes/random`

export default function QuotesGenerator() {
  const [jokes, setJokes] = useState([])

  const fetchJokes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJokes(data)
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <>
      <article>
        <h4 className="mt-2">{jokes.value}</h4>
      </article>
    </>
  )
}
