import { useState } from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
      <article>
        <div onClick={() => setShowAnswer(!showAnswer)}>
          <div className="flex items-center justify-between my-2 bg-gray-200 p-2">
            <h4 className="font-bold cursor-pointer text-lg">{question}</h4>
            <button>{showAnswer ? <FaChevronUp /> : <FaChevronDown />}</button>
          </div>
          {showAnswer && <p className="leading-8">{answer}</p>}
        </div>
      </article>
    </>
  )
}

export default SingleQuestion
