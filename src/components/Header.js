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
  // const navigate = useNavigate();
  // const [username, setUsername] = useState("Demo User");
  // const { serverApi } = useContext(apiContext);
  // async function checkUserNameResponse(response) {
  //   const data = await response.json();
  //   if (response.status === 200) {
  //     // console.log(" data got is", data);
  //     setUsername(data.name);
  //     return data;
  //   } else {
  //     console.log(response);
  //   }
  // }
  // function getUsername() {
  //   fetch(`${serverApi}/getUsername`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       logintoken: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((response) => checkUserNameResponse(response))
  //     .catch((err) => console.log(err.message));
  // }

  // useEffect(() => {
  //   getUsername();
  // }, []);
  // function logout() {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // }
  return (
    <>
      <header className="header-container">
        <img
          className="pizza-logo"
          src="..\assets\images\pizza-logo.jpg"
          alt="logo-alt"
          srcset=""
        />
        <div className="input-search-box">
          <SearchIcon className="search-icon" sx={{ fontSize: "20px" }} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="shopping-cart">
          <Badge color="secondary" badgeContent={8} max={10}>
            <ShoppingCartIcon />
          </Badge>
        </div>
        <div className="profile-container">
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
        </div>
      </header>
    </>
  );
}

export { Header };
