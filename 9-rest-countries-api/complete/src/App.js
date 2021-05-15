import { BrowserRouter, Route, Switch } from "react-router-dom"
import Countries from "./components/Countries"
import Country from "./components/Country"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/country/:name" children={<Country />}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
