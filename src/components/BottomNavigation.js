import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BottomNavigation() {
  const menus = [
    { name: "Home", icon: <HomeRoundedIcon />, path: "/user" },
    { name: "Chat", icon: <ChatIcon />, path: "chat" },
    {
      name: "Wallet",
      icon: <AccountBalanceWalletRoundedIcon />,
      path: "wallet",
    },
    { name: "Favorties", icon: <FavoriteIcon />, path: "favorties" },
    { name: "Docs", icon: <SummarizeRoundedIcon />, path: "reports" },
    { name: "Settings", icon: <SettingsRoundedIcon />, path: "settings" },
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
  const navigate = useNavigate();
  const handleClick = (e) => {
    setActive(menu.name);
    navigate(menu.path);
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
