import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Test na płeć mózgu</h1>
        <div className="center">
          <Link to="/test">
            <button type="button" className="mainButton">
              <span>Rozpocznij test</span>
            </button>
          </Link>
          <Link to="/info">
            <button type="button" className="mainButton">
              <span>Informacje</span>
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default App;
