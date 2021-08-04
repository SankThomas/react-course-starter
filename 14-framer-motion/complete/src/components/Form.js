import { useState } from "react"
import { motion } from "framer-motion"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && email && details) {
      console.log(
        `Name is ${name}, email is ${email}, project details are "${details}"`
      )
    }
  }

  return (
    <>
      <motion.form
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-gray-300"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div>
            <label htmlFor="name" className="block">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-300"
            />
          </div>
        </div>

        <label htmlFor="details" className="block">
          Project details
        </label>
        <textarea
          name="details"
          id="details"
          cols="30"
          rows="5"
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full bg-transparent border-b-2 border-gray-300"
        ></textarea>

        <button
          type="submit"
          className="text-gray-300 text-xl mt-5 rounded-md border-2 py-2 px-6"
        >
          Send
        </button>
      </motion.form>
    </>
  )
}
