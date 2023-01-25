import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import RunCircleIcon from "@mui/icons-material/RunCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { useState } from "react";
function AdminHome() {
  return (
    <>
      <div className="admin-home-container">
        <Dashboard />
        <FilteredOrders />
      </div>
    </>
  );
}

function Dashboard() {
  const [count, setCount] = useState({
    acceptancePendingOrders: 0,
    inPreparationOrders: 0,
    pendingDeliveryOrders: 0,
    completedOrders: 0,
    cancelledOrders: 0,
  });
  const cards = [
    {
      count: count.acceptancePendingOrders,
      title: "Acceptance Pending Orders",
      icon: <SwipeRightIcon sx={{ fontSize: 30, color: "#54B4D3" }} />,
      color: "#54B4D3",
    },
    {
      count: count.inPreparationOrders,
      title: "Preparing",
      icon: <OutdoorGrillIcon sx={{ fontSize: 30, color: "#3B71CA" }} />,
      color: "#3B71CA",
    },
    {
      count: count.pendingDeliveryOrders,
      title: "Delivery Pending",
      icon: <RunCircleIcon sx={{ fontSize: 30, color: "#E4A11B" }} />,
      color: "#E4A11B",
    },
    {
      count: count.completedOrders,
      title: "Completed",
      icon: <VerifiedIcon sx={{ fontSize: 30, color: "#14A44D" }} />,
      color: "#14A44D",
    },
    {
      count: count.cancelledOrders,
      title: "Cancelled",
      icon: <DoNotDisturbAltIcon sx={{ fontSize: 30, color: "#DC4C64" }} />,
      color: "#DC4C64",
    },
  ];
  return (
    <>
      <div className="dashboard-container ">
        <h4 className="title-big">Dashboard</h4>
        <p className="title-small text-center ">Today</p>
        <div className=" cards-container d-flex flex-wrap gap-2 mt-4 ">
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

function Card({ card }) {
  const { count, title, icon, color } = card;
  return (
    <>
      <div
        style={{
          border: `2px solid ${color}`,
          borderRadius: "10px",
        }}
        className="card-container  d-flex flex-column justify-content-between align-items-center "
      >
        <div className="dash-logo">{icon}</div>

        <p
          style={{
            color: color,
            fontWeight: 600,
            fontSize: "10px",
            textAlign: "center",
            lineHeight: 0.9,
          }}
          className="category"
        >
          {title}
        </p>
        <h6
          style={{
            color: color,
            fontWeight: 600,
          }}
          className="count"
        >
          {333}
        </h6>
      </div>
    </>
  );
}

function FilteredOrders() {
  const orders = [
    {
      date: "2022-02-27 21:12:75",
      orderId: "afafa5555",
      paymentStatus: "paid/cod",
      isCompleted: false,
      orderStatus: "05",
      customerId: "sghfhfhahfsg",
      customerName: "sivaraj",
      mobile: "9988778877",
      address: "affffffffff pi sdghdgdh isjjkd TN",
      pin: 636808,
      items: [
        { name: "burger", qty: "3", price: "15" },
        { name: "pizza", qty: "2", price: "25" },
      ],
    },
  ];
  return (
    <>
      <div className="filtered-orders-container">
        <h2 className="title-big">Filtered orders</h2>
        <p className="title-small text-center ">acceptance pending order</p>
        <div className="orders-container">
          {orders.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

function Order({ order }) {
  const {
    date,
    orderId,
    isCompleted,
    paymentStatus,
    orderStatus,
    customerId,
    customerName,
    mobile,
    address,
    pin,
    items,
  } = order;

  const statusActions = [
    <button type="button" class="btn btn-info">
      01-accept
    </button>,
    <button type="button" class="btn btn-primary">
      02-move to prepare
    </button>,
    <button type="button" class="btn btn-warning">
      03-sent for delivery
    </button>,
    <button type="button" class="btn btn-danger">
      04-rejected by cust
    </button>,
    <button type="button" class="btn btn-success">
      05-Delivered
    </button>,
    <button type="button" class="btn btn-secondary">
      06-Rejected by Admin
    </button>,
  ];

  const orderCode = {
    "01": (
      <h5 className="order-status text-info">
        Order Placed and waiting for approval - 01
      </h5>
    ),
    "02": (
      <p className="order-status text-primary ">Accepted and Preparing - 02</p>
    ),
    "03": (
      <p className="order-status text-warning">
        Prepared and Sent for Delivery -03
      </p>
    ),
    "04": <p className="order-status text-danger">Rejected by Customer -04</p>,
    "05": <p className="order-status text-success">Delivered -05</p>,
    "08": <p className="order-status text-muted">Rejected By Admin -06</p>,
  };
  return (
    <>
      <div className="order-container section">
        <div className="top-section ">
          <div className="left">
            <h5 className="customer-name">{customerName}</h5>
            <p className="mobile">{mobile}</p>
            <p className="address">{address}</p>
            <p className="pin">{pin}</p>
          </div>
          <div className="right">
            {orderCode[orderStatus]}
            <p className="order-date">{date}</p>
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
                {items.map((item) => {
                  const { name, qty, price } = item;
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
            <h5 className="total-price text-success">$ {`257`}</h5>
            {paymentStatus === "paid" ? (
              <p className="payment-status text-success">{paymentStatus}</p>
            ) : (
              <p className="payment-status text-primary">{paymentStatus}</p>
            )}
          </div>
        </div>
        <div className="status-actions">
          {!isCompleted ? statusActions.map((action) => action) : null}
        </div>
      </div>
    </>
  );
}
export { AdminHome };
