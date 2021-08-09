// import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
// import LoginForm from "./login/LoginForm"
import Error from "./pages/Error"

// Pages
import Dashboard from "./pages/Dashboard"

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          {/* <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
          <Dashboard />
        </Route>
        {/* <Route path="/dashboard">{isLoggedIn && <Dashboard />}</Route> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
