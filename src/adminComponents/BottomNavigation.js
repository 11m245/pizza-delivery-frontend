import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BottomNavigation() {
  const menus = [
    { name: "Home", icon: <HomeRoundedIcon />, path: "/admin" },
    { name: "Products", icon: <SplitscreenIcon />, path: "products" },

    { name: "Categories", icon: <CategoryIcon />, path: "categories" },
    { name: "Stock", icon: <Inventory2Icon />, path: "stock" },
    { name: "All Orders", icon: <SummarizeRoundedIcon />, path: "allOrders" },
    {
      name: "Cash Report",
      icon: <AccountBalanceWalletRoundedIcon />,
      path: "path1",
    },

    { name: "Settings", icon: <SettingsRoundedIcon />, path: "path1" },
  ];

  const [active, setActive] = useState("");
  return (
    <>
      <div className="bottom-menus-container">
        {menus.map((menu, i) => (
          <BottomMenu
            menu={menu}
            key={i}
            id={i + 1}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </>
  );
}

function BottomMenu({ menu, id, active, setActive }) {
  const navigate = useNavigate();
  const { name, icon, path } = menu;
  const handleClick = (e) => {
    setActive(name);
    navigate(path);
  };
  return (
    <>
      <div
        className={`bottom-menu-wrapper  ${
          menu.name === active ? "active" : "inactive"
        }`}
        id={id}
        onClick={handleClick}
      >
        <IconButton color="primary" aria-label="add to shopping cart">
          {icon}
        </IconButton>
      </div>
    </>
  );
}

export { BottomNavigation };
