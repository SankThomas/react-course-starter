import { Link } from "react-router-dom"

export default function Dropdown({ showDropdown, setShowDropdown }) {
  return (
    <>
      <ul>
        <li
          onClick={() => setShowDropdown(!showDropdown)}
          className="mb-3 text-gray-500"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setShowDropdown(!showDropdown)}
          className="mb-3 text-gray-500"
        >
          <Link to="/tasks">Your Tasks</Link>
        </li>
        <li
          onClick={() => setShowDropdown(!showDropdown)}
          className="mb-3 text-gray-500"
        >
          <Link to="/jobs">Jobs</Link>
        </li>
        <li
          onClick={() => setShowDropdown(!showDropdown)}
          className="mb-3 text-gray-500"
        >
          <Link to="/settings">Settings</Link>
        </li>
        <li
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-500"
        >
          <Link to="/login">Log Out</Link>
        </li>
      </ul>
    </>
  )
}
