import { AiOutlineLine } from "react-icons/ai"
import Buttons from "./components/Buttons"
import Form from "./components/Form"

// Design inspiration from Igor Pavlinski on Dribbble

export default function App() {
  return (
    <>
      <div className="bg-light absolute h-full w-1/3 bg-gray-500"></div>
      <section className="px-5 lg:max-w-6xl lg:mx-auto">
        <div>
          <h1 className="text-4xl text-white lg:text-8xl pt-10">Contact Us</h1>
          <h2 className="flex items-center lg:pl-32 text-3xl lg:text-6xl text-gray-400 mt-3 mb-10">
            <AiOutlineLine /> Need a web developer?
          </h2>
        </div>

        <div>
          <h3 className="text-gray-300 mb-5">What can we do you for?</h3>
          <Buttons />
        </div>

        <Form />
      </section>
    </>
  )
}
