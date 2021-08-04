import { useState } from "react"

export default function LoginForm({ isLoggedIn, setIsLoggedIn }) {
  const [newUser, setNewUser] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("http://localhost:3000")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && email) {
      setNewUser({
        fullName: name,
        email,
      })
      setIsLoggedIn(true)
      let newUrl = new URL("/", url)
      setUrl(newUrl)
    }

    console.log(newUser)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
