import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h2>Not Found!</h2>
    <div className="center">
      <Link to="/">
        <button type="button">
          <span>Strona główna</span>
        </button>
      </Link>
    </div>
  </>
);

export default NotFound;
