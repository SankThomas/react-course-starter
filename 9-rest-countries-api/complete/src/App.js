import { useState, useEffect } from "react"

const url = `https://restcountries.eu/rest/v2/all`

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      console.log(data)
    }

    fetchCountries()
  }, [])

  return (
    <>
      <section>
        <h1>{countries.length} countries</h1>
        <div className="countries">
          {countries.map((country) => {
            const {
              name,
              alpha2Code,
              capital,
              region,
              subregion,
              population,
              demonym,
              timezones,
              borders,
              numericCode,
              flag,
            } = country

            return (
              <article key={numericCode}>
                <img src={flag} alt={name} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
