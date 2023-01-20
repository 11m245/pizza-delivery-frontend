import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { BottomNavigation } from "./components/BottomNavigation";
import { BrandingWatermark } from "@mui/icons-material";
import { Banner } from "./components/Banner";
import { SubMenuContainer } from "./components/SubMenuContainer";
import { MenuItemCard } from "./components/MenuItemCard";

function Layout() {
  const items = [
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
                  {items.map((item, id) => (
                    <MenuItemCard key={id} item={item} />
                  ))}
                </div>
                <div className="dish-item-container"></div>
              </div>
            </div>
            <div className="right-menu"></div>
          </main>
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}

export { Layout };
