import React from "react";
import Account from "./Account";
import "../stylesheets/App.css";

const App = () => {
  return (
    <div>
      <div className="header">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <div className="container">
        <Account />
      </div>
    </div>
  );
}

export default App;
