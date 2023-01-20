import React from "react";

function App() {
  const test = process.env.REACT_APP_KEY;

  console.log(test);

  return <div className="App">hello</div>;
}

export default App;
