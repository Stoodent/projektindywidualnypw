import React from "react";
import { Link } from "react-router-dom";

const Info = () => (
  <>
    <div>
      <h2>Informacje</h2>
      <p>
        Test określa w jakiej mierze męski lub kobiecy jest twój umysł. To, w
        jakim stopniu zachowanie kobiet i mężczyzn jest kobiece lub męskie,
        zależy od modelu, według którego uformowany jest ich mózg. Hormony
        płciowe wywierają wpływ na kształtowanie mózgu w rozwoju płodowym
        powodując powstawanie podstawowych różnic między ludźmi.
        <br />
        Test został opartyna podstawie książki "Płeć mózgu" -A.Moir, D.Jessel .
        <br />
        Autor aplikacji -Mikołaj Sęklewski
      </p>
    </div>
    <div className="center">
      <Link to="/">
        <button type="button">
          <span>Strona główna</span>
        </button>
      </Link>
    </div>
  </>
);

export default Info;
