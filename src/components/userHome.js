import { Banner } from "./Banner";
import { SubMenuContainer } from "./SubMenuContainer";
import { MenuCard } from "./MenuCard";
import { ItemCard } from "./ItemCard";
function UserHome() {
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
  return (
    <div className="user-home-container">
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
  );
}

export { UserHome };
