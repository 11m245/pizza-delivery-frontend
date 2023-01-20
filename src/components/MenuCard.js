import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function MenuCard({ menu }) {
  const { name, image } = menu;
  return (
    <>
      <div className="menu-wrapper">
        <div className="img-box">
          <img src={image} alt="menu-img" srcset="" />
        </div>
        <h3>{name}</h3>
        <KeyboardArrowRightRoundedIcon />
      </div>
    </>
  );
}

export { MenuCard };
