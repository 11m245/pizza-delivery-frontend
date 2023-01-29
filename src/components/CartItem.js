import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { pizzaContext } from "../App";

function CartItem({ cartItem }) {
  const { imageUrl, name, qty, price } = cartItem;
  const { cartDispatch } = useContext(pizzaContext);

  const handleAddToCart = (value) => {
    cartDispatch({ type: "ADDED", payload: value });
  };
  const handleMinusFromCart = (value) => {
    cartDispatch({ type: "REMOVED", payload: value });
  };

  return (
    <>
      <div className="cart-item-wrapper">
        <div className="img-box">
          <img src={imageUrl} alt={`${name} img`} />
        </div>
        <div className="item-section">
          <h2 className="item-name">{name}</h2>
          <div className="item-quantity">
            <span>x {qty}</span>
            <div className="buttons">
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => handleAddToCart(cartItem)}
              >
                <AddCircleOutlineRoundedIcon />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="remove from shopping cart"
                onClick={() => handleMinusFromCart(cartItem)}
              >
                <RemoveCircleIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <p className="item-price">
          <span className="symbol">$ </span>
          <span className="item-price-value">{price}</span>
        </p>
      </div>
    </>
  );
}

export { CartItem };
