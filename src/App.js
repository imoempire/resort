import "./App.css";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}>
          
          </Route>
          <Route>
          <ErrorPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
