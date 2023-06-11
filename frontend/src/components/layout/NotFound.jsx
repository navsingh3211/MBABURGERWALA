import React from "react";
import { Link } from "react-router-dom";
import {MdError} from "react-icons/md"
const NotFound = () => {
  return (
    <section className="loader">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>
        <p>Page not found,click below to go to home page.</p>
        <Link to="/">Go to Home</Link>
      </main>
    </section>
  );
};

export default NotFound;
