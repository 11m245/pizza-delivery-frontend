import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";

function CartItem({ cartItem }) {
  const { image, name, quantity, price } = cartItem;
  return (
    <>
      <div className="cart-item-wrapper">
        <div className="img-box">
          <img src={image} alt={`${name} img`} />
        </div>
        <div className="item-section">
          <h2 className="item-name">{name}</h2>
          <div className="item-quantity">
            <span>x {quantity}</span>
            <div className="buttons">
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddCircleOutlineRoundedIcon />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="remove from shopping cart"
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
