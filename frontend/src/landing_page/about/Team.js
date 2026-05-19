import React from "react";

function Team() {
  return (
    <div className="container border-top">
      <div className="row text-center mt-5">
        <h3>People</h3>
      </div>
      <div className="row">
        <div className="col-5 p-5 text-center">
            <img src="media/images/apoorvika.jpg" style={{width:"70%",borderRadius:"100%"}}></img>
            <h4 className="fs-5 mt-3 text-muted">Apoorvika Gupta</h4>
            <p>Creator,Stockeshwari</p>
        </div>
        <div className="col-7 p-5 fs-5">
          <p>Apoorvika is a third-year IT Engineering student and the creator of
          Stockeshwari, a Zerodha-inspired stock trading platform built to
          simplify investing and make financial technology more accessible for
          everyone.</p><p> Passionate about technology, finance, and product
          development, she is currently exploring full-stack development,
          AI-powered investing tools, and modern fintech systems. Through
          Stockeshwari, she aims to recreate and understand the seamless trading
          experience pioneered by Zerodha while adding her own creative vision
          and technical innovations.</p><p> She believes in learning by building and
          turning ambitious ideas into real-world projects that combine design,
          technology, and user experience.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
