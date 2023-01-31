import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import RunCircleIcon from "@mui/icons-material/RunCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { pizzaContext } from "../App";
function AdminHome() {
  const { serverApi } = useContext(pizzaContext);
  const [allCurrentOrders, setAllCurrentOrders] = useState([]);
  const [isOrdersReceived, setIsOrdersReceived] = useState(false);
  const [filterOrderStatus, setFilterOrderStatus] = useState("");

  // const [orderedUsers, setOrderedUsers] = useState("");
  // const [ordersStatus, setOrdersStatus] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch(`${serverApi}/orders/getTodayUserOrders`);
      const data = await res1.json();
      setAllCurrentOrders(data.orders);
      // console.log("allUserOrders", data);
      setIsOrdersReceived(!isOrdersReceived);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="admin-home-container">
        <Dashboard
          allCurrentOrders={allCurrentOrders}
          setAllCurrentOrders={setAllCurrentOrders}
          isOrdersReceived={isOrdersReceived}
          filterOrderStatus={filterOrderStatus}
          setFilterOrderStatus={setFilterOrderStatus}
        />
        <FilteredOrders
          filterOrderStatus={filterOrderStatus}
          allCurrentOrders={allCurrentOrders}
          setAllCurrentOrders={setAllCurrentOrders}
          isOrdersReceived={isOrdersReceived}
          setIsOrdersReceived={setIsOrdersReceived}
        />
      </div>
    </>
  );
}

function Dashboard({
  allCurrentOrders,
  setAllCurrentOrders,
  isOrdersReceived,
  filterOrderStatus,
  setFilterOrderStatus,
}) {
  const [acceptancePendingOrdersCount, setAcceptancePendingOrdersCount] =
    useState(0);
  const [inPreparationOrdersCount, setInPreparationOrdersCount] = useState(0);
  const [pendingDeliveryOrdersCount, setPendingDeliveryOrdersCount] =
    useState(0);
  const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
  const [cancelledOrdersCount, setCancelledOrdersCount] = useState(0);

  useEffect(() => {
    console.log("use allorders", allCurrentOrders);

    const aPO = allCurrentOrders.filter(
      (order) => order.currentStatus === "00"
    );
    setAcceptancePendingOrdersCount(aPO.length);

    const iPO = allCurrentOrders.filter(
      (order) => order.currentStatus === "02"
    );
    setInPreparationOrdersCount(iPO.length);

    const pDO = allCurrentOrders.filter(
      (order) => order.currentStatus === "03"
    );
    setPendingDeliveryOrdersCount(pDO.length);
    const rO = allCurrentOrders.filter((order) => order.currentStatus === "04");
    setCancelledOrdersCount(rO.length);
    const cO = allCurrentOrders.filter((order) => order.currentStatus === "05");
    setCompletedOrdersCount(cO.length);
  }, [isOrdersReceived]);

  const cards = [
    {
      title: "Acceptance Pending Orders",
      icon: <SwipeRightIcon sx={{ fontSize: 30, color: "#54B4D3" }} />,
      color: "#54B4D3",
      statusCode: "00",
    },
    {
      title: "Preparing",
      icon: <OutdoorGrillIcon sx={{ fontSize: 30, color: "#3B71CA" }} />,
      color: "#3B71CA",
      statusCode: "02",
    },
    {
      title: "Delivery Pending",
      icon: <RunCircleIcon sx={{ fontSize: 30, color: "#E4A11B" }} />,
      color: "#E4A11B",
      statusCode: "03",
    },
    {
      title: "Completed",
      icon: <VerifiedIcon sx={{ fontSize: 30, color: "#14A44D" }} />,
      color: "#14A44D",
      statusCode: "05",
    },
    {
      title: "Cancelled",
      icon: <DoNotDisturbAltIcon sx={{ fontSize: 30, color: "#DC4C64" }} />,
      color: "#DC4C64",
      statusCode: "04",
    },
  ];
  return (
    <>
      <div className="dashboard-container ">
        <h4 className="title-big">Dashboard</h4>
        <p className="title-small text-center ">Today</p>
        <div className=" cards-container d-flex flex-wrap gap-2 mt-4 ">
          {cards.map((card, i) => (
            <Card
              setFilterOrderStatus={setFilterOrderStatus}
              card={card}
              index={i}
              count={
                i === 0
                  ? acceptancePendingOrdersCount
                  : i === 1
                  ? inPreparationOrdersCount
                  : i === 2
                  ? pendingDeliveryOrdersCount
                  : i === 3
                  ? completedOrdersCount
                  : i === 4
                  ? cancelledOrdersCount
                  : null
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Card({ card, count, setFilterOrderStatus }) {
  const { title, icon, color, statusCode } = card;
  return (
    <>
      <div
        onClick={() => setFilterOrderStatus(statusCode)}
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
          {count}
        </h6>
      </div>
    </>
  );
}

function FilteredOrders({
  allCurrentOrders,
  setAllCurrentOrders,
  filterOrderStatus,
  isOrdersReceived,
  setIsOrdersReceived,
}) {
  const [showingOrders, setShowingOrders] = useState(allCurrentOrders);

  useEffect(() => {
    const filteredArray = allCurrentOrders.filter(
      (order) => order.currentStatus === filterOrderStatus
    );
    setShowingOrders(filteredArray);
  }, [filterOrderStatus]);
  return (
    <>
      <div className="filtered-orders-container">
        <h2 className="title-big">Filtered orders</h2>
        <p className="title-small text-center ">acceptance pending order</p>
        <div className="orders-container">
          {showingOrders.map((order) => (
            <Order
              order={order}
              setIsOrdersReceived={setIsOrdersReceived}
              isOrdersReceived={isOrdersReceived}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Order({ order, setIsOrdersReceived, isOrdersReceived }) {
  const { serverApi } = useContext(pizzaContext);
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

  const statusActions = [
    <button
      type="button"
      class="btn btn-info"
      onClick={() => updateStatus("02", orderId)}
    >
      01-accept and prepare 02
    </button>,
    // <button
    //   type="button"
    //   class="btn btn-primary"
    //   onClick={() => updateStatus("02", orderId)}
    // >
    //   02-move to prepare
    // </button>,
    <button
      type="button"
      class="btn btn-warning"
      onClick={() => updateStatus("03", orderId)}
    >
      03-sent for delivery
    </button>,
    <button
      type="button"
      class="btn btn-danger"
      onClick={() => updateStatus("04", orderId)}
    >
      04-rejected by cust
    </button>,
    <button
      type="button"
      class="btn btn-success"
      onClick={() => updateStatus("05", orderId)}
    >
      05-Delivered
    </button>,
    <button
      type="button"
      class="btn btn-secondary"
      onClick={() => updateStatus("06", orderId)}
    >
      06-Rejected by Admin
    </button>,
  ];

  //

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

  const updateStatus = (status, orderId) => {
    fetch(`${serverApi}/orders/updateStatus/${status}`, {
      method: "POST",
      headers: {
        logintoken: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: orderId }),
    })
      .then((data) => setIsOrdersReceived(!isOrdersReceived))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="order-container section">
        <div className="top-section ">
          <div className="left">
            <h5 className="customer-name">{user[0].name}</h5>
            <p className="mobile">{user[0].mobile}</p>
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
        <div className="status-actions">
          {!isCompleted ? statusActions.map((action) => action) : null}
          {/* {true ? statusActions.map((action) => action) : null} */}
        </div>
      </div>
    </>
  );
}
export { AdminHome };
