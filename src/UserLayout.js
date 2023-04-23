import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { BottomNavigation } from "./components/BottomNavigation";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "./components/CartItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "./App";
import { toast } from "react-toastify";
function UserLayout() {
  const { serverApi, clientURL } = useContext(pizzaContext);
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(pizzaContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cTotal = cartItems.reduce((acc, cobj) => {
      return acc + parseInt(cobj.price) * parseInt(cobj.qty);
    }, 0);
    setTotal(cTotal);
  }, [cartItems]);

  // const clearCart = () => {
  //   cartDispatch({ type: "CLEAR" });
  // };
  // const placeOrder = () => {
  //   // console.log("cart items now", cartItems);
  //   const orderItems = cartItems.map((item) => {
  //     return { _id: item._id, qty: item.qty };
  //   });
  //   fetch(`${serverApi}/orders/new`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       logintoken: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify(orderItems),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       clearCart();
  //       setShowCart(false);
  //       setTotal(0);
  //       // console.log("order response data", data);
  //       data.message === "order placed"
  //         ? toast.success(data.message)
  //         : toast.error(data.message);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const initiatePayment = () => {
    // console.log("cart items now", cartItems);
    const orderItems = cartItems.map((item) => {
      return { _id: item._id, qty: item.qty };
    });
    fetch(`${serverApi}/payments/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        logintoken: localStorage.getItem("token"),
      },
      body: JSON.stringify(orderItems),
    })
      .then((response) => response.json())
      .then((data) => {
        // clearCart();
        setShowCart(false);
        // setTotal(0);
        // console.log("order response data", data);
        data.message === "Successful Payment Session Creation"
          ? toast.success(data.message)
          : toast.error(data.message);

        window.location = data.payload?.url
          ? data.payload.url
          : `${clientURL}/user`;
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="page-container">
        <Header showCart={showCart} setShowCart={setShowCart} />
        <div className="body-container">
          {/* <Outlet /> */}
          <main>
            <div className="main-container">
              <Outlet />
            </div>
            {showCart ? (
              <div className="cart-check-out-container">
                <div className="cart-container">
                  {/* <SubMenuContainer name={"Cart Items"} /> */}
                  <div className="sub-menu-container d-flex align-items-center justify-content-between">
                    <h3>Cart Items</h3>
                    <div
                      className="close d-flex  align-items-center gap-1"
                      onClick={() => setShowCart(false)}
                    >
                      <p className="m-1">Close</p>
                      <CloseIcon />
                    </div>
                  </div>
                  <div className="cart-items">
                    {cartItems.length > 0 ? (
                      cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                      ))
                    ) : (
                      <img
                        alt="cart-img"
                        className="mx-auto"
                        style={{ width: "200px", height: "200px" }}
                        src={
                          "https://www.aytradingco.com/assets/frontend/img/no-cart-product.png"
                        }
                      />
                    )}
                  </div>
                </div>

                {cartItems.length > 0 ? (
                  <>
                    {" "}
                    <div className="total-section">
                      <h3>Total</h3>
                      <p>
                        <span> $ {total}</span>
                      </p>
                    </div>
                    <Button
                      className="check-out-button"
                      variant="contained"
                      color="success"
                      endIcon={<SendIcon />}
                      onClick={() => initiatePayment()}
                    >
                      Check Out
                    </Button>
                  </>
                ) : null}
              </div>
            ) : null}
          </main>
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}

export { UserLayout };
