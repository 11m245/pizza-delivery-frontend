import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useEffect, useState } from "react";

function BottomNavigation() {
  const menus = [
    { name: "Home", icon: <HomeRoundedIcon />, path: "path1" },
    { name: "Chat", icon: <ChatIcon />, path: "path1" },
    {
      name: "Wallet",
      icon: <AccountBalanceWalletRoundedIcon />,
      path: "path1",
    },
    { name: "Favorties", icon: <FavoriteIcon />, path: "path1" },
    { name: "Docs", icon: <SummarizeRoundedIcon />, path: "path1" },
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
  const { name, icon } = menu;
  const handleClick = (e) => {
    setActive(menu.name);
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
