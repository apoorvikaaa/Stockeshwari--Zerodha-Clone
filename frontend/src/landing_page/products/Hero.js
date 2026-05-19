import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center m-5 p-3">
        <h1>Our Products</h1>
        <h3 className="mt-3 text-muted">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-2 text-muted">
          Check out our {""}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
