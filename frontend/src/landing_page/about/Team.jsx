import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.3em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/Images/myImage.png"
            alt="My Image"
            style={{
              borderRadius: "100%",
              height: "400px",
            }}
          />

          <h4 className="mt-4">Simon Massey</h4>
          <h6>Founder , CEO</h6>
        </div>

        <div className="col-6 p-5">
          
          <p>Simon bootstrapped and founded Zenvest in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>

            <p> Playing cricket is his zen.</p> 
            <p> Connect on <a href="/" style={{textDecoration:"none"}}>Homepage</a> / 
            <a href="" style={{textDecoration:"none"}}> TradingQnA </a> / 
            <a href="" style={{textDecoration:"none"}}> Twitter</a></p>
        </div>
      </div>
    </div>
  );
};

export default Team;
