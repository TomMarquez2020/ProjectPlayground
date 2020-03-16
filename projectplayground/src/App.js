import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import MainUi from "./Components/MainUi";

function App() {
  return (
    <div className="container">
      <NavigationBar />
      <MainUi />
    </div>
  );
}

export default App;
