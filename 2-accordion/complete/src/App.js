import { useState } from "react"
import { questions } from "./questions"
import SingleQuestion from "./SingleQuestion"

function App() {
  // eslint-disable-next-line
  const [quests, setQuests] = useState(questions)

  return (
    <>
      <h4 className="text-center text-lg lg:text-4xl pt-10">
        Frequently Asked Questions
      </h4>
      <div className="flex flex-col justify-center px-5 md:max-w-2xl md:mx-auto">
        {quests.map((quest) => (
          <SingleQuestion key={quest.id} {...quest} />
        ))}
      </div>
    </>
  )
}

export default App
