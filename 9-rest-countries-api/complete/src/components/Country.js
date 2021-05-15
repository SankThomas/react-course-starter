import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../country.css"

const Country = () => {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      const data = await res.json()
      setCountry(data)
    }

    fetchCountry()
  }, [name])

  return (
    <>
      <h1>Country component</h1>
      <section>
        {country.map(({ numericCode, name, flag }) => (
          <article key={numericCode}>
            <img src={flag} alt={name} />
            <h4>{name}</h4>
          </article>
        ))}
      </section>
    </>
  )
}

export default Country
