import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import SinglePost from "./components/SinglePost"
import Blog from "./components/Blog"
import Error from "./components/Error"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/blog/:slug">
          <SinglePost />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
