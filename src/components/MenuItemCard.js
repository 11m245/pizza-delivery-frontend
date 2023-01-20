import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function MenuItemCard({ item }) {
  const { name, image } = item;
  return (
    <>
      <div className="item-wrapper">
        <div className="img-box">
          <img src={image} alt="item-img" srcset="" />
        </div>
        <h3>{name}</h3>
        <KeyboardArrowRightRoundedIcon />
      </div>
    </>
  );
}

export { MenuItemCard };
