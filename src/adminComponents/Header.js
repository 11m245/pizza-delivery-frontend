import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Chip from "@mui/material/Chip";
import { useContext, useEffect, useState } from "react";
import { apiContext } from "../App";
import { Badge } from "@mui/material";

function Header() {
  const [showDropLog, setShowDropLog] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <header className="header-container">
        <img
          className="pizza-logo"
          src="https://i.pinimg.com/736x/3e/f6/70/3ef6706c547372b9c593e8c600e70c9a.jpg"
          alt="logo-alt"
        />
        <div className="input-search-box">
          <SearchIcon className="search-icon" sx={{ fontSize: "20px" }} />
          <input type="text" placeholder="Search" />
        </div>
        {/* <div className="shopping-cart">
          <Badge color="secondary" badgeContent={8} max={10}>
            <ShoppingCartIcon />
          </Badge>
        </div> */}
        <div
          className="profile-container"
          onClick={() => setShowDropLog(!showDropLog)}
          onBlur={() => setShowDropLog(false)}
        >
          <Avatar
            className="profile-pic"
            alt="Remy Sharp"
            src="..\assets\images\user-image.jpg"
            sx={{
              width: 40,
              height: 40,
              minWidth: 40,
              borderRadius: "100vw",
              backgroundColor: "#444",
              border: "2px solid red",
            }}
          />
          <p className="username">username</p>
          {showDropLog ? (
            <div className="drop-log-out">
              <p className="drop-menu" onClick={logout}>
                logout
              </p>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}

export { Header };
