import { useState, useEffect } from "react"

const url = `https://www.themealdb.com/api/json/v1/1/random.php`

function App() {
  const [meals, setMeals] = useState([])

  const fetchMealData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setMeals(data.meals)
    console.log(data.meals)
  }

  useEffect(() => {
    fetchMealData()
  }, [])

  return (
    <>
      <div className="px-5 py-10">
        <h1 className="text-center flex flex-col items-center font-bold text-4xl">
          Have no idea what to cook?
          <button
            onClick={() => fetchMealData()}
            className="text-sm bg-gray-200 p-2 rounded hover:bg-gray-400 transition-all duration-500 cursor-pointer"
          >
            Get Random Recipe
          </button>
        </h1>
        <section>
          {meals.map(
            ({
              idMeal,
              strMeal,
              strCategory,
              strArea,
              strInstructions,
              strMealThumb,
              strTags,
              strSource,
            }) => (
              <article
                key={idMeal}
                className="grid gap-5 mt-10 md:grid-cols-2 md:items-center xl:max-w-5xl xl:mx-auto"
              >
                <div>
                  <h4 className="font-bold text-xl">
                    <span className="font-light">Name:</span> {strMeal}
                  </h4>
                  <small className="block mb-5">
                    Category: {strCategory}, {strArea}
                  </small>
                  <img src={strMealThumb} alt={strMeal} />
                </div>
                <div>
                  <p>{strInstructions}</p>
                  <p className="mt-5">
                    <a
                      href={strSource}
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      Source
                    </a>
                  </p>
                  <p>Tags: {strTags}</p>
                </div>
              </article>
            )
          )}
        </section>
      </div>
    </>
  )
}

export default App
