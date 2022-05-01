import React from "react";
import Introduction from "./components/Introduction";
import About from "./components/About"
import Interest from "./components/Interest";
import Media from "./components/Media"


function App() {
  return (
    <div className="container">
      <Introduction/>
      <About/>
      <Interest/>
      <Media />
    </div>
  );
}

export default App;
