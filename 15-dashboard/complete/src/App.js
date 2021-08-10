// import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import LoginForm from "./login/LoginForm"
import Error from "./pages/Error"

// Pages
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          {/* <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
          <Dashboard />
        </Route>
        {/* <Route path="/dashboard">{isLoggedIn && <Dashboard />}</Route> */}
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
