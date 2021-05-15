import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import "../country.css"

const Country = () => {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { name } = useParams()

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      const data = await res.json()
      setCountry(data)
      setIsLoading(false)
    }

    fetchCountry()
  }, [name])

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="country">
          {country.map(
            ({
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
            }) => (
              <article key={numericCode}>
                <div>
                  <h4>
                    {name}, {alpha2Code}
                  </h4>
                  <img src={flag} alt={name} className="country-img" />
                </div>
                <div>
                  <ul>
                    <li>
                      <span>Capital:</span> {capital}
                    </li>
                    <li>
                      <span>Region:</span> {region}
                    </li>
                    <li>
                      <span>Sub Region:</span> {subregion}
                    </li>
                    <li>
                      <span>Population:</span> {population}
                    </li>
                    <li>
                      <span>Demonym:</span> {demonym}
                    </li>
                  </ul>

                  <ul
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Borders:
                    </p>
                    {borders.map((border) => {
                      return (
                        <li
                          key={border}
                          style={{
                            marginRight: 5,
                            marginLeft: 5,
                            backgroundColor: "#fff",
                            padding: 5,
                          }}
                        >
                          {border}
                        </li>
                      )
                    })}
                  </ul>

                  <>
                    <br />
                    <Link to="/">
                      <FaArrowLeft /> Back
                    </Link>
                  </>
                </div>
              </article>
            )
          )}
        </section>
      )}
    </>
  )
}

export default Country
