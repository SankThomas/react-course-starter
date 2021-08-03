import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Blog from "./pages/Blog"
import Error from "./pages/Error"
import SinglePost from "./pages/SinglePost"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/blog/:slug" children={<SinglePost />}></Route>
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
