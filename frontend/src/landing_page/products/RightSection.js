import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col-5 p-5" style={{marginTop:"80px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div mt-5>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              className=""
            >
              Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7 text-center">
          <img
            style={{ width: "70%", marginBottom: "5px" }}
            src={imageURL}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
