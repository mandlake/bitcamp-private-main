"use client";

import DraftsIcon from "@mui/icons-material/Drafts";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SmsIcon from "@mui/icons-material/Sms";
import Shop2Icon from "@mui/icons-material/Shop2";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const icons = [
  { id: 1, img: <DraftsIcon className="w-[35px] h-[35px]" />, text: "메일" },
  { id: 2, img: <LocalCafeIcon className="w-[35px] h-[35px]" />, text: "카페" },
  { id: 3, img: <SmsIcon className="w-[35px] h-[35px]" />, text: "블로그" },
  { id: 4, img: <Shop2Icon className="w-[35px] h-[35px]" />, text: "쇼핑" },
  { id: 5, img: <NewspaperIcon className="w-[35px] h-[35px]" />, text: "뉴스" },
  {
    id: 6,
    img: <InsertChartIcon className="w-[35px] h-[35px]" />,
    text: "증권",
  },
  { id: 7, img: <HomeIcon className="w-[35px] h-[35px]" />, text: "부동산" },
  { id: 8, img: <MapIcon className="w-[35px] h-[35px]" />, text: "지도" },
  { id: 9, img: <DashboardIcon className="w-[35px] h-[35px]" />, text: "웹툰" },
  { id: 10, img: <FlashOnIcon className="w-[35px] h-[35px]" />, text: "치료" },
];

const IconsBox = () => {
  return (
    <>
      <nav className="flex justify-center w-[900px]">
        {icons &&
          icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col justify-center items-center p-2"
            >
              <div className=" border-2 rounded-xl p-2 text-[var(--color-Naver-main)]">
                {icon.img}
              </div>
              <p className="icon__text">{icon.text}</p>
            </div>
          ))}
        <div className="flex flex-col justify-center items-center p-2">
          <div className=" border-2 rounded-xl p-2 text-[var(--color-Naver-main)]">
            <MoreHorizIcon className="w-[35px] h-[35px] text-black-50" />
          </div>
          <p className="icon__text">더보기</p>
        </div>
      </nav>
    </>
  );
};

export default IconsBox;
