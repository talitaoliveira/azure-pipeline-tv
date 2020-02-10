import React from "react";
import "./App.css";
import BoxWrapper from "./components/BoxWrapper";
import Input from "./components/Input";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Switch
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = () => {
  let query = useQuery();
  return (
    <Switch>
      <BoxWrapper exact path="/status-tv" />
      <Input />
    </Switch>
  );
};

export default App;
