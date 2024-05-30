"use client";

import KeyboardIcon from "@mui/icons-material/Keyboard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <>
      <div className="w-[900px] flex justify-between font-bold items-center rounded-full border-2 px-7 border-[var(--color-Naver-main)]">
        <div className="logo flex justify-center">
          <p className="Nanum_Gothic text-[40px] text-[var(--color-Naver-main)]">
            N
          </p>
          <input type="text" className="w-[30vw]" />
        </div>
        <div>
          <KeyboardIcon className="w-[40px] h-[40px]" />
          <KeyboardArrowDownIcon className="w-[20px]" />
          <SearchIcon className="w-[40px] h-[40px]" />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
