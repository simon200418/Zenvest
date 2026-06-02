import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [user, setUser] = useState(null);
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/verify", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3002/allHoldings", {
        withCredentials: true,
      })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;
  const pnlPercentage =
    totalInvestment > 0
      ? ((pnl / totalInvestment) * 100).toFixed(2)
      : 0;

  return (
    <>
      <div className="username">
        <h6>
          Hi, {user?.name ? user.name.split(" ")[0] : "User"}!
        </h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{currentValue.toFixed(2)}</h3>
            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0.00</span>
            </p>

            <p>
              Opening balance
              <span>₹{currentValue.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)}{" "}
              <small>
                {pnl >= 0 ? "+" : ""}
                {pnlPercentage}%
              </small>
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value
              <span>₹{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment
              <span>₹{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;