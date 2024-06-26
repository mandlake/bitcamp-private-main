"use client";

import Navigation from "./components/common/module/default-box";
import SearchBox from "./components/common/module/search-box";
import IconsBox from "./components/common/module/icons-box";
import LoginMini from "./components/common/module/login--mini";
import NewsMini from "./components/common/module/news-mini";
import LawyersMiniPage from "./components/common/module/lawyers--mini";
import ExamplesMiniPages from "./components/common/module/examples--mini";
import WeatherMiniPage from "./components/common/module/weather--mini";
import CrimeRateMiniPage from "./components/common/module/crime-rate--mini";
import WidgetBoardMini from "./components/common/module/widget-board--mini";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { useRouter } from "next/navigation";
import FooterPage from "./components/common/module/footer";

function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col w-screen justify-center items-center box-border text-[var(--color-main)] pb-[64px]">
        <div className="w-[1280px] box-border">
          <Navigation />
          <div className="flex flex-col justify-center items-center pb-[20px]">
            <SearchBox />
            <IconsBox />
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-[830px] flex flex-col justify-between gap-4">
              <div className="address border border-[rgba(0,0,0,0.1)] rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://ssl.pstatic.net/melona/libs/1497/1497607/5208297d6dcb504d914e_20240520140159458.jpg"
                />
              </div>
              <div className="news--mini h-[426px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <NewsMini />
              </div>
              <div className="examples--mini h-[560px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <ExamplesMiniPages />
              </div>
              <div className="lawyers--mini h-[1000px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <LawyersMiniPage />
              </div>
            </div>
            <div className="w-[420px] flex flex-col gap-4">
              <div className="login-mini flex items-center justify-center h-[150px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <LoginMini />
              </div>
              <div className="address border border-[rgba(0,0,0,0.1)] rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://ssl.pstatic.net/melona/libs/1491/1491376/1781400040bea3eeea04_20240401144028928.jpg"
                />
              </div>
              <div className="weather--mini h-[236px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <WeatherMiniPage />
              </div>
              <div className="crime-rate--mini h-[236px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <CrimeRateMiniPage />
              </div>
              <div className="address border border-[rgba(0,0,0,0.1)] rounded-lg">
                <img
                  className="rounded-lg"
                  src="https://s.pstatic.net/static/www/mobile/edit/20240513_1095/upload_171557831212478K5t.png"
                />
              </div>
              <div className="widget-board--mini h-[771px] border border-[rgba(0,0,0,0.1)] rounded-lg bg-[var(--color-widget-bg)]">
                <WidgetBoardMini />
              </div>
              <div className="whale--mini h-[64px] border border-[rgba(0,0,0,0.1)] rounded-lg flex justify-center items-center">
                <button
                  onClick={() => router.push("pages/join")}
                  className=" font-semibold"
                >
                  Please be our mate to see roro <EastOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer flex items-center justify-center h-[430px] w-screen bg-gray-100 border border-[var(--color-Naver-footer)] ">
        <FooterPage />
      </div>
    </>
  );
}

export default Home;
