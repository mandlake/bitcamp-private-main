"use client";

import Navigation from "@/app/components/common/module/default-box";
import UserPageMini from "../../userpage/page";
import { NextPage } from "next";
import SearchBox from "@/app/components/common/module/search-box";
import IconsBox from "@/app/components/common/module/icons-box";
import NewsMini from "@/app/components/common/module/news-mini";
import LawyersMiniPage from "@/app/components/common/module/lawyers--mini";
import ExamplesMiniPages from "@/app/components/common/module/examples--mini";
import WeatherMiniPage from "@/app/components/common/module/weather--mini";
import CrimeRateMiniPage from "@/app/components/common/module/crime-rate--mini";
import WidgetBoardMini from "@/app/components/common/module/widget-board--mini";

const Home: NextPage = (props: any) => {
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
              <div className="shopping--mini h-[560px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <ExamplesMiniPages />
              </div>
              <div className="lawyers--mini h-[1000px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <LawyersMiniPage />
              </div>
            </div>
            <div className="w-[420px] flex flex-col gap-4">
              <div className="login-mini flex items-center justify-center h-[150px] border border-[rgba(0,0,0,0.1)] rounded-lg">
                <UserPageMini data={props.params.id} />
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
              <div className="whale--mini h-[64px] border border-[rgba(0,0,0,0.1)] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer flex h-[430px] w-screen bg-[rgba(0,0,0,0.2)] border border-[var(--color-Naver-footer)]"></div>
    </>
  );
};

export default Home;
