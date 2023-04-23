import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "../App";

function UserOrders() {
  const [allOrders, setAllOrders] = useState([]);
  const { serverApi } = useContext(pizzaContext);

  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch(`${serverApi}/orders/getUserOrders`, {
        method: "GET",
        headers: { logintoken: localStorage.getItem("token") },
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
    invoiceAmount,
    user,
    payment,
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
        <h6 className="text-center">Order ID : {order._id}</h6>
        <div className="top-section ">
          <div className="left">
            <p>
              <u>Delivery</u>
            </p>
            <p className="address">{user.address}</p>
            <p className="pin">{user.pincode}</p>
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
                      <td className="text-center">Rs. {price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="right">
            <h5 className="total title-small fw-bold">Total</h5>
            <h5 className="total-price text-success">Rs. {invoiceAmount}</h5>
          </div>
        </div>

        <div className="payment-section d-flex flex-column gap-1">
          <h5 className="text-center">
            <u>Payment Details</u>
          </h5>
          <div className="d-flex justify-content-between">
            <h6>mode: {payment.modeOfPayment}</h6>
            <h6>paid Amount: Rs. {payment.paidAmount}</h6>
            <h6
              className={
                payment.sessionStatus === "complete"
                  ? "text-success"
                  : "text-danger"
              }
            >
              request : {payment.sessionStatus}
            </h6>
          </div>

          <h6>Payment ID: {payment.paymentIntent}</h6>

          <div className="d-flex justify-content-between">
            <h6>
              paid At: {new Date(payment.updatedAt * 1000).toLocaleString()}
            </h6>

            {payment.paymentStatus === "paid" ? (
              <p className="payment-status text-success">
                {payment.paymentStatus}
              </p>
            ) : (
              <p className="payment-status text-danger">
                {payment.paymentStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { UserOrders };
