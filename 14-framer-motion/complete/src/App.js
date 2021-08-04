import { AiOutlineLine } from "react-icons/ai"
import Buttons from "./components/Buttons"
import Form from "./components/Form"
import { motion } from "framer-motion"

// Design inspiration from Igor Pavlinski on Dribbble

export default function App() {
  return (
    <>
      <motion.div
        initial={{
          y: "-100vh",
        }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.8,
        }}
        className="bg-light absolute h-full w-1/3 bg-gray-500"
      ></motion.div>
      <section className="px-5 lg:max-w-6xl lg:mx-auto">
        <div>
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl text-white lg:text-8xl pt-10"
          >
            Contact Us
          </motion.h1>
          <motion.h2
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center lg:pl-32 text-3xl lg:text-6xl text-gray-400 mt-3 mb-10"
          >
            <AiOutlineLine /> Need a web developer?
          </motion.h2>
        </div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h3 className="text-gray-300 mb-5">What can we do you for?</h3>
          <Buttons />
        </motion.div>

        <Form />
      </section>
    </>
  )
}
