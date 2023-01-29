import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function MenuCard({ menu, allProducts, setViewProducts }) {
  const { category, image } = menu;

  const filterProducts = (category) => {
    // console.log("clicked on menu", category);
    // console.log("products is", allProducts);
    const filteredProducts = allProducts.filter((product) => {
      // console.log("match result is", product.category === category);
      return product.category === category;
    });
    setViewProducts(filteredProducts);
  };
  return (
    <>
      <div className="menu-wrapper" onClick={() => filterProducts(category)}>
        <div className="img-box">
          <img src={image} alt="menu-img" srcset="" />
        </div>
        <h3>{category}</h3>
        <KeyboardArrowRightRoundedIcon />
      </div>
    </>
  );
}

export { MenuCard };
