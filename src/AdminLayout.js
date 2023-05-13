import { Outlet } from "react-router-dom";
import { Header } from "./adminComponents/Header";
import { BottomNavigation } from "./adminComponents/BottomNavigation";

function AdminLayout() {
  // const menus = [
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza",
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "Burger",
  //   },
  // ];

  // const items = [
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=",
  //     name: "Pizza1",
  //     rating: "5",
  //     price: "25",
  //     isVeg: false,
  //   },
  //   {
  //     image:
  //       "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  //     name: "pizza2",
  //     rating: "3",
  //     price: "25",
  //     isVeg: true,
  //   },
  // ];

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
      <div className="admin-page-container">
        <Header />
        <div className="body-container">
          <main>
            <div className="main-container">
              <Outlet />
            </div>
          </main>
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}

export { AdminLayout };
