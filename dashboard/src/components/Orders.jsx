import React, { useState, useEffect , useContext } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // 1. Consume the refresh count from context
  const { orderRefreshCount } = useContext(GeneralContext);

  useEffect(() => {

    const fetchOrders = async () => {
      try{
        axios.get("https://zenvest-jpg3.onrender.com/allOrders", 
          { 
            withCredentials: true,
          },
        )
        .then((res) => {
          setAllOrders(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }catch (error) {
        console.error("Error fetching orders:", error);
      }
    }; 
      fetchOrders();
      }, [orderRefreshCount]);
      
  const deleteOrder = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this order?"
      );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://zenvest-jpg3.onrender.com/deleteOrder/${id}`,
        {
          withCredentials: true,
        }
      );
      setAllOrders(
        allOrders.filter(
          (order) => order._id !== id
        )
      );

    } catch (err) {
      console.log(err);
    }
  };

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
                <th>Action</th>
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
                        order.mode?.toLowerCase() === "buy" ? "profit" : "loss"
                      }
                    >
                      {order.mode}
                    </td>
                    <td>₹{totalValue.toFixed(2)}</td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteOrder(order._id)}>
                        Delete
                      </button>
                    </td>
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
                .reduce((sum, order) => sum + order.qty * order.price, 0)
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
