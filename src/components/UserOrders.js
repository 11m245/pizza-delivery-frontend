import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "../App";

function UserOrders() {
  const [allOrders, setAllOrders] = useState([]);
  const { serverApi } = useContext(pizzaContext);

  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch(`${serverApi}/orders/getUserOrders`, {
        method: "GET",
        headers: localStorage.getItem("token"),
      });
      const data = await res1.json();
      data.message === "no orders found"
        ? setAllOrders([])
        : setAllOrders(data.orders);
    }
    fetchData();
  }, []);
  return (
    <>
      <h4>all orders</h4>
      <div className="orders-container">
        {allOrders.length === 0 ? (
          <p>No Orders</p>
        ) : (
          allOrders.map((order) => <Order key={order._id} order={order} />)
        )}
      </div>
    </>
  );
}

function Order({ order }) {
  const {
    statusUpdatedAt,
    _id: orderId,
    isCompleted,
    paymentMode,
    currentStatus,
    products,
    orderAmount,
    user,
  } = order;

  const orderCode = {
    "00": (
      <h5 className="order-status text-info">
        Order Placed and waiting for approval - 01
      </h5>
    ),
    "01": (
      <p className="order-status text-primary ">Accepted and Preparing - 02</p>
    ),
    "02": (
      <p className="order-status text-primary">Accepted and Preparing - 02</p>
    ),
    "03": (
      <p className="order-status text-warning">
        Prepared and Sent for Delivery -03
      </p>
    ),
    "04": <p className="order-status text-danger">Rejected by Customer -04</p>,
    "05": <p className="order-status text-success">Delivered -05</p>,
    "06": <p className="order-status text-muted">Rejected By Admin -06</p>,
  };

  return (
    <>
      <div className="order-container section">
        <div className="top-section ">
          <div className="left">
            <p>
              <u>Delivery</u>
            </p>
            <p className="address">{user[0].address}</p>
            <p className="pin">{user[0].pincode}</p>
          </div>
          <div className="right">
            {orderCode[currentStatus]}
            <p className="order-date">
              {new Date(statusUpdatedAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bottom-section ">
          <div className="left">
            <table class="table table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const { name, qty, price } = product;
                  return (
                    <tr>
                      <td>{name}</td>
                      <td className="text-center">{qty}</td>
                      <td className="text-center">{price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="right">
            <h5 className="total title-small fw-bold">Total</h5>
            <h5 className="total-price text-success">$ {orderAmount}</h5>
            {paymentMode === "paid" ? (
              <p className="payment-status text-success">{paymentMode}</p>
            ) : (
              <p className="payment-status text-primary">{paymentMode}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { UserOrders };
