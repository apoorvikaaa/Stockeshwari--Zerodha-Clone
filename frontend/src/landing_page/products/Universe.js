import React from "react";

function Universe() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p className="mt-3 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center p-3">
        <div className="col p-5">
          <div>
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "60%" }}
            ></img>
            <p style={{ fontSize: "15px" }} className="mt-5">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="mt-5">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "60%" }}
            ></img>
            <p style={{ fontSize: "15px" }} className="mt-5">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
        </div>
        <div className="col p-5">
          <div>
            <img
              src="media/images/streakLogo.png"
              style={{ width: "60%" }}
            ></img>
            <p style={{ fontSize: "15px" }} className="mt-5">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="mt-5">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "60%" }}
            ></img>
            <p style={{ fontSize: "15px" }} className="mt-5">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col p-5">
          <div>
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "60%" }}
            ></img>
            <p style={{ fontSize: "15px" }} className="mt-5">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
          <div className="mt-5">
            <img
              src="media/images/goldenpiLogo.png"
              style={{ width: "60%" }}
            ></img>
            <p style={{ fontSize: "15px" }} className="mt-5">
              Our bonds trading platform that helps you invest in bonds.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className='p-2 btn btn-primary fs-5 mb-5 text-center fw-bold' style={{width:"15%",margin:"0 auto"}}>Sign up for Free</button>
      </div>
      
    </div>
  );
}

export default Universe;
