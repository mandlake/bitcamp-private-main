"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navigation = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <MenuIcon className="w-[48px] h-[48px]" />
          <LocalAtmOutlinedIcon className="w-[48px] h-[48px]" />
        </div>
        <div className="flex justify-between items-center">
          <TextsmsOutlinedIcon className="w-[48px] h-[48px]" />
          <NotificationsOutlinedIcon className="w-[48px] h-[48px]" />
          <ShoppingBagOutlinedIcon className="w-[48px] h-[48px]" />
        </div>
      </header>
    </>
  );
};

export default Navigation;
