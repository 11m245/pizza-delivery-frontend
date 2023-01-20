import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

function BottomNavigation() {
  const menus = [
    { name: "Home", icon: <HomeRoundedIcon />, path: "path1" },
    { name: "Home", icon: <ChatIcon />, path: "path1" },
    { name: "Home", icon: <AccountBalanceWalletRoundedIcon />, path: "path1" },
    { name: "Home", icon: <FavoriteIcon />, path: "path1" },
    { name: "Home", icon: <SummarizeRoundedIcon />, path: "path1" },
    { name: "Home", icon: <SettingsRoundedIcon />, path: "path1" },
  ];
  return (
    <>
      <div className="bottom-menus-container">
        {menus.map((menu) => (
          <BottomMenu menu={menu} />
        ))}
      </div>
    </>
  );
}

function BottomMenu({ menu }) {
  const { name, icon } = menu;
  return (
    <>
      <div className="bottom-menu-wrapper">
        <IconButton color="primary" aria-label="add to shopping cart">
          {icon}
        </IconButton>
      </div>
    </>
  );
}

export { BottomNavigation };
