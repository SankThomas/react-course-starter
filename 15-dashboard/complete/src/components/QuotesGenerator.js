import { useState, useEffect } from "react"

const url = `https://api.chucknorris.io/jokes/random`

export default function QuotesGenerator() {
  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchJokes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJokes(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <>
      {isLoading ? (
        <h2>Loading quote...</h2>
      ) : (
        <article>
          <h4 className="mt-2">{jokes.value}</h4>
        </article>
      )}
    </>
  )
}
