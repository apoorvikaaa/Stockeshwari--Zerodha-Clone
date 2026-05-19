import React from "react";

function Leftsection(
  {imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,}
) {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col-8 p-3">
          <img style={{width:"70%",marginBottom:"5px"}}src={imageURL}></img>
        </div>
        <div className="col-4 p-2 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div mt-5>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore}style={{textDecoration:"none"}} className="p-5">Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"style={{marginRight:"20px"}}></img>
            </a>
            <a href={appStore}>
              <img  src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
