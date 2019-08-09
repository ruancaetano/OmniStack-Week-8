import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#df4723" />
      <Routes />
    </>
  );
};

export default App;
