import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const url = `https://restcountries.eu/rest/v2/all`

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setIsLoading(false)
    }

    fetchCountries()
  }, [])

  return (
    <>
      <section>
        <h2
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
            fontSize: 30,
          }}
        >
          Showing {countries.length} countries
        </h2>
        {isLoading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : (
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
        )}
      </section>
    </>
  )
}

export default Countries
