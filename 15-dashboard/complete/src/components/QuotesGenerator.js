import { useState, useEffect } from "react"

// const url = `https://api.chucknorris.io/jokes/random`
const url2 = `https://goquotes-api.herokuapp.com/api/v1/random?count=1`

export default function QuotesGenerator() {
  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchJokes = async () => {
    const response = await fetch(url2)
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
          <h4>{jokes.quotes[0].text}</h4>
          <p>
            <em>By {jokes.quotes[0].author}</em>
          </p>
          <small>
            Powered by{" "}
            <a
              href="https://goquotes.docs.apiary.io/#reference/get-random-quote(s)/apiv1randomcount/get-random-quote(s)"
              className="bg-white px-1 rounded shadow hover:bg-pink-300"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Go Quotes API
            </a>
          </small>
        </article>
      )}
    </>
  )
}
