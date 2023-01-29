import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { BottomNavigation } from "./components/BottomNavigation";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloseIcon from "@mui/icons-material/Close";

import { BrandingWatermark } from "@mui/icons-material";

import { CartItem } from "./components/CartItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import { pizzaContext } from "./App";
function UserLayout() {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(pizzaContext);
  // const cart_items = [
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza1",
  //     quantity: "5",
  //     price: "25",
  //     isVeg: false,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "pizza2",
  //     quantity: "3",
  //     price: "25",
  //     isVeg: true,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza1",
  //     quantity: "5",
  //     price: "25",
  //     isVeg: false,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "pizza2",
  //     quantity: "3",
  //     price: "25",
  //     isVeg: true,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza1",
  //     quantity: "5",
  //     price: "25",
  //     isVeg: false,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "pizza2",
  //     quantity: "3",
  //     price: "25",
  //     isVeg: true,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza1",
  //     quantity: "5",
  //     price: "25",
  //     isVeg: false,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "pizza2",
  //     quantity: "3",
  //     price: "25",
  //     isVeg: true,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza1",
  //     quantity: "5",
  //     price: "25",
  //     isVeg: false,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "pizza2",
  //     quantity: "3",
  //     price: "25",
  //     isVeg: true,
  //   },
  // ];

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
                    {cartItems.map((cartItem) => (
                      <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))}
                  </div>
                </div>
                <div className="total-section">
                  <h3>Total</h3>
                  <p>
                    <span> $ {"45.0"}</span>
                  </p>
                </div>

                <Button
                  className="check-out-button"
                  variant="contained"
                  color="success"
                  endIcon={<SendIcon />}
                >
                  Check Out
                </Button>
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
