import { useState, useEffect } from "react"

function App() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const countdown = () => {
    const endDate = new Date("December 25, 2021 00:00:00").getTime()
    const today = new Date().getTime()

    const diff = endDate - today

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor(diff / days)
    let timeHours = Math.floor((diff % days) / hours)
    let timeMinutes = Math.floor((diff % hours) / minutes)
    let timeSeconds = Math.floor((diff % minutes) / seconds)

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

    setDays(timeDays)
    setHours(timeHours)
    setMinutes(timeMinutes)
    setSeconds(timeSeconds)
  }

  useEffect(() => {
    setInterval(countdown, 1000)
  }, [])

  return (
    <div className="bg-gray-900 h-screen text-white text-center py-20">
      <h4 className="text-4xl">There are</h4>
      <section className="timer flex items-center justify-center text-center py-10">
        <div className="bg-gray-800 m-1 w-20 p-2 rounded xl:w-40">
          <h3 className="text-red-400 font-bold text-lg md:text-2xl xl:text-6xl">
            {days}
          </h3>
          <p className="mt-2">Days</p>
        </div>
        <div className="bg-gray-800 m-1 w-20 p-2 rounded xl:w-40">
          <h3 className="text-red-400 font-bold text-lg md:text-2xl xl:text-6xl">
            {hours}
          </h3>
          <p className="mt-2">Hours</p>
        </div>
        <div className="bg-gray-800 m-1 w-20 p-2 rounded xl:w-40">
          <h3 className="text-red-400 font-bold text-lg md:text-2xl xl:text-6xl">
            {minutes}
          </h3>
          <p className="mt-2">Minutes</p>
        </div>
        <div className="bg-gray-800 m-1 w-20 p-2 rounded xl:w-40">
          <h3 className="text-red-400 font-bold text-lg md:text-2xl xl:text-6xl">
            {seconds}
          </h3>
          <p className="mt-2">Seconds</p>
        </div>
      </section>
      <h4 className="text-4xl">To Christmas</h4>
    </div>
  )
}

export default App
