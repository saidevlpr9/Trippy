import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <h1 className="text-center mr-7">404</h1>
              <div className="four_zero_four_bg"></div>

              <div className="mt-[] text-xl">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>
              </div>
              <Link to="/">
                <button className="mt-5">Go to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
