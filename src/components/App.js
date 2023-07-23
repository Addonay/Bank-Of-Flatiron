import React from "react";
import Account from "./Account";
import "../stylesheets/App.css";

const App = () => {
  // The main App component
  return (
    <div>
      {/* Header */}
      <div className="header">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {/* Main container for the Account component */}
      <div className="container">
        {/* Rendering the Account component */}
        <Account />
      </div>
    </div>
  );
}

export default App;
