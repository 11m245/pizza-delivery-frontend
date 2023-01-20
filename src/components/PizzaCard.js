import { IconButton, ToggleButtonGroup } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

function PizzaCard() {
  const [size, setSize] = useState("medium");

  const handleChange = (event, newSize) => {
    setSize(newSize);
    // console.log(event.target.value, newSize);
  };

  return (
    <>
      <h1>pizza card</h1>

      <div className="pizza-card">
        <div className="pizza-card-img"></div>
        <div className="pizza-card-info">
          <p className="text-title">Product title </p>
          <p className="text-body">Product description and details</p>
        </div>
        <div className="pizza-card-size">
          <ToggleButtonGroup
            color="primary"
            value={size}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="medium">MEDIUM</ToggleButton>
            <ToggleButton value="large">LARGE</ToggleButton>
            <ToggleButton value="small">SMALL</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="pizza-card-footer">
          <span className="text-title">$499.49</span>
          <div className="pizza-card-button">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export { PizzaCard };
