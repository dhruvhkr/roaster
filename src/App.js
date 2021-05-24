import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPlayer from "./Components/AddPlayer";
import Players from "./Components/Players";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setArray } from "./Components/Ducks/roasterReducer";
import Teams from "./Components/Teams";

function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (localStorage.getItem("data") == null) {
      localStorage.setItem("data", "[]");
    } else {
      const data = JSON.parse(localStorage.getItem("data"));

      console.log(data);

      dispatch(setArray(data));
    }
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={AddPlayer} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/teams" component={Teams} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
