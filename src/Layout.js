import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { BottomNavigation } from "./components/BottomNavigation";
import { BrandingWatermark } from "@mui/icons-material";
import { Banner } from "./components/Banner";
import { SubMenuContainer } from "./components/SubMenuContainer";
import { MenuCard } from "./components/MenuCard";
import { ItemCard } from "./components/ItemCard";
import { CartItem } from "./components/CartItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
function Layout() {
  const menus = [
    {
      image:
        "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
      name: "Pizza",
    },
    {
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      name: "Burger",
    },
  ];

  const items = [
    {
      image:
        "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
      name: "Pizza1",
      rating: "5",
      price: "25",
      isVeg: false,
    },
    {
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      name: "pizza2",
      rating: "3",
      price: "25",
      isVeg: true,
    },
  ];

  const cart_items = [
    {
      image:
        "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
      name: "Pizza1",
      quantity: "5",
      price: "25",
      isVeg: false,
    },
    {
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      name: "pizza2",
      quantity: "3",
      price: "25",
      isVeg: true,
    },
    {
      image:
        "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
      name: "Pizza1",
      quantity: "5",
      price: "25",
      isVeg: false,
    },
    {
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      name: "pizza2",
      quantity: "3",
      price: "25",
      isVeg: true,
    },
    {
      image:
        "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
      name: "Pizza1",
      quantity: "5",
      price: "25",
      isVeg: false,
    },
    {
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      name: "pizza2",
      quantity: "3",
      price: "25",
      isVeg: true,
    },
  ];

  return (
    <>
      <div className="page-container">
        <Header />
        <div className="body-container">
          {/* <Outlet /> */}
          <main>
            <div className="main-container">
              <div className="banner">
                <Banner />
              </div>
              <div className="dish-container">
                <div className="menu-card">
                  <SubMenuContainer name={"Menu Category"} />
                </div>
                <div className="row-container">
                  {menus.map((menu, id) => (
                    <MenuCard key={id} menu={menu} />
                  ))}
                </div>
                <div className="dish-item-container">
                  {items.map((item) => (
                    <ItemCard item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="cart-check-out-container">
              <div className="cart-container">
                <SubMenuContainer name={"Cart Items"} />
                <div className="cart-items">
                  {cart_items.map((cartItem) => (
                    <CartItem cartItem={cartItem} />
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
          </main>
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}

export { Layout };
