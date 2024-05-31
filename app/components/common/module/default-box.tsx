"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { iconsCSS, rounded } from "../icons";

const Navigation = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className={rounded}>
            <MenuIcon className={iconsCSS} />
          </div>
          <div className={rounded}>
            <LocalAtmOutlinedIcon className={iconsCSS} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className={rounded}>
            <TextsmsOutlinedIcon className={iconsCSS} />
          </div>
          <div className={rounded}>
            <NotificationsOutlinedIcon className={iconsCSS} />
          </div>
          <div className={rounded}>
            <ShoppingBagOutlinedIcon className={iconsCSS} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
