"use client";

import KeyboardIcon from "@mui/icons-material/Keyboard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { iconGraySmCSS, iconsGrayCSS, iconBlackCSS } from "../icons";
import { logoCss } from "../logo";

const SearchBox = () => {
  return (
    <>
      <div className="w-[900px] flex justify-between font-bold items-center rounded-full border-2 px-7 border-[var(--color-Harbor-third)]">
        <div className="logo flex justify-center">
          <p className={`${logoCss} `}>L</p>
          <input type="text" className="w-[30vw]" />
        </div>
        <div>
          <KeyboardIcon className={iconsGrayCSS} />
          <KeyboardArrowDownIcon className={iconGraySmCSS} />
          <SearchIcon className={iconBlackCSS} />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
