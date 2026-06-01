import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Total Value</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, index) => {
                const totalValue = order.qty * order.price;

                return (
                  <tr key={order._id || index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹{order.price.toFixed(2)}</td>
                    <td
                      className={
                        order.mode?.toLowerCase() === "buy"
                          ? "profit"
                          : "loss"
                      }
                    >
                      {order.mode}
                    </td>
                    <td>₹{totalValue.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {allOrders.length > 0 && (
        <div className="row">
          <div className="col">
            <h5>{allOrders.length}</h5>
            <p>Total Orders</p>
          </div>

          <div className="col">
            <h5>
              ₹
              {allOrders
                .reduce(
                  (sum, order) => sum + order.qty * order.price,
                  0
                )
                .toFixed(2)}
            </h5>
            <p>Total Order Value</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;