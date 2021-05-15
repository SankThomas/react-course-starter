import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const url = `https://restcountries.eu/rest/v2/all`

const Countries = () => {
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
                <div>
                  <h4>
                    {name}, {alpha2Code}
                  </h4>
                  <ul>
                    <li>
                      <span>Capital:</span> {capital}
                    </li>
                    <li>
                      <span>Region:</span> {region}
                    </li>
                    <li>
                      <span>SubRegion:</span> {subregion}
                    </li>
                    <li>
                      <span>Population:</span> {population}
                    </li>
                    <li>
                      <span>Demonym:</span> {demonym}
                    </li>
                    <li>
                      <Link to={`/country/${name}`}>More Details</Link>
                    </li>
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Countries
