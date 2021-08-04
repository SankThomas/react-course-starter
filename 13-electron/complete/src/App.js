import { useEffect, useState } from "react"
import Header from "./components/Header"
import Images from "./components/Images"

function App() {
  const [hours, setHours] = useState(24)

  const countdown = () => {
    const endDate = new Date("January 1, 2022 00:00:00").getTime()
    const today = new Date().getTime()

    const timeDiff = endDate - today

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeHours = Math.floor((timeDiff % days) / hours)

    setHours(timeHours)
  }

  useEffect(() => {
    countdown()
  }, [])

  return (
    <>
      <div className="container mx-auto text-gray-600">
        <Header />

        <h1 className="text-center font-bold tracking-widest text-4xl md:text-6xl lg:text-8xl text-center mt-10">
          {hours < 12 ? "Good afternoon" : "Good morning"}
        </h1>

        <p className="text-center mt-4">Grab your Covfefe all day every day</p>

        <Images />
      </div>
    </>
  )
}

export default App
