import { Banner } from "./Banner";
import { SubMenuContainer } from "./SubMenuContainer";
import { MenuCard } from "./MenuCard";
import { ItemCard, ProductCard } from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "../App";
function UserHome() {
  const [isMenuCategoryFetched, setIsMenuCategoryFetched] = useState(false);
  const { serverApi } = useContext(pizzaContext);
  // console.log("server api is", serverApi);
  const [menus, setMenus] = useState([]);
  const [isProductsFetched, setIsProductsFetched] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [viewProducts, setViewProducts] = useState(allProducts);

  useEffect(() => {
    if (!isMenuCategoryFetched) {
      fetch(`${serverApi}/products/category`)
        .then((response) => response.json())
        .then((data) => setMenus(data.categories))
        .catch((err) => console.log(err));
    }
    if (!isProductsFetched) {
      fetch(`${serverApi}/products/getAllProducts`)
        .then((response) => response.json())
        .then((data) => {
          setAllProducts(data.products);
          setViewProducts(data.products);
        })
        .catch((err) => console.log(err));
    }
  }, []);
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
          {menus.map((menu) => (
            <MenuCard
              key={menu._id}
              menu={menu}
              allProducts={allProducts}
              setViewProducts={setViewProducts}
            />
          ))}
        </div>
        <div className="dish-item-container">
          {viewProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { UserHome };
