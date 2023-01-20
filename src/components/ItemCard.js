import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

function ItemCard({ item }) {
  const { name, image, rating, price, isVeg } = item;
  const [currentRating, setCurrentRating] = useState(Math.floor(rating));

  const handleClick = (value) => {
    setCurrentRating(value);
  };
  return (
    <>
      <div className="item-wrapper">
        <div className="isVeg">
          <img
            width="100%"
            height="100%"
            src={
              isVeg
                ? "https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
            }
            alt=""
          />
        </div>
        <div className="img-box">
          <img src={image} alt="item-img" srcset="" />
        </div>
        <div className="item-content">
          <h3 className="item-name">{name}</h3>
          <div className="bottom">
            <div className="item-left">
              <div className="ratings">
                {Array(5)
                  .fill(0)
                  .map((x, i) => (
                    <StarRateRoundedIcon
                      className={`${i < currentRating ? "orange" : "grey"}`}
                      key={i}
                      sx={{ margin: 0, padding: 0, fontSize: "15px" }}
                      onClick={() => handleClick(i + 1)}
                    />
                  ))}
              </div>
              <h3 className="item-price">
                <span>$</span> {price}
              </h3>
            </div>
            <div className="add-to-cart">
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddCircleIcon />
              </IconButton>
              {/* <AddIcon /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ItemCard };
