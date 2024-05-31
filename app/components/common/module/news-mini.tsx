"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NewsMini = () => {
  return (
    <>
      <div className="p-2">
        <header className="flex items-center p-3 gap-3 ">
          <h1>실시간 사건</h1>
          <div className="w-[3px] h-[3px] bg-gray-400  rounded-full"></div>
          <h1>사고 기사</h1>
        </header>
        <main className="flex gap-3 flex-col">
          <div className="p-3 flex justify-between items-center bg-gray-100">
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <p>분야별 뉴스</p>
                <ArrowDropDownIcon />
              </div>
              <div className=" bg-gray-300 h-5 w-[1px]"></div>
              <div className="flex items-center gap-1">
                <p>동아일보</p>
                <div className="w-[3px] h-[3px] bg-gray-400 rounded-full"></div>
                <p>軍 “내일 북풍 예보…北, 또 오물풍선 살포 가능성”</p>
              </div>
            </div>
            <p className=" font-bold">뉴스홈</p>
          </div>
          <div className="flex flex-wrap gap-6 p-1">
            <div className="flex gap-3 items-center">
              <img
                className="h-[104px] w-[156px]"
                src="https://imgnews.pstatic.net/image/001/2024/05/31/AKR20240531053851065_03_i_P4_20240531161613853.jpg?type=w647"
              />
              <div className="w-[213px] flex flex-col gap-2">
                <h1 className="text-[13px] font-semibold">연합뉴스</h1>
                <p className="text-[14.3px] font-medium">
                  여성 무차별 폭행한 전직 보디빌더 구속…아내도 조사 예정(종합)
                </p>
                <p className="text-[13px]">05월 31일 16:14</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                className="h-[104px] w-[156px]"
                src="https://imgnews.pstatic.net/image/001/2024/05/31/AKR20240531053851065_03_i_P4_20240531161613853.jpg?type=w647"
              />
              <div className="w-[213px] flex flex-col gap-2">
                <h1 className="text-[13px] font-semibold">연합뉴스</h1>
                <p className="text-[14.3px] font-medium">
                  여성 무차별 폭행한 전직 보디빌더 구속…아내도 조사 예정(종합)
                </p>
                <p className="text-[13px]">05월 31일 16:14</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                className="h-[104px] w-[156px]"
                src="https://imgnews.pstatic.net/image/001/2024/05/31/AKR20240531053851065_03_i_P4_20240531161613853.jpg?type=w647"
              />
              <div className="w-[213px] flex flex-col gap-2">
                <h1 className="text-[13px] font-semibold">연합뉴스</h1>
                <p className="text-[14.3px] font-medium">
                  여성 무차별 폭행한 전직 보디빌더 구속…아내도 조사 예정(종합)
                </p>
                <p className="text-[13px]">05월 31일 16:14</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                className="h-[104px] w-[156px]"
                src="https://imgnews.pstatic.net/image/001/2024/05/31/AKR20240531053851065_03_i_P4_20240531161613853.jpg?type=w647"
              />
              <div className="w-[213px] flex flex-col gap-2">
                <h1 className="text-[13px] font-semibold">연합뉴스</h1>
                <p className="text-[14.3px] font-medium">
                  여성 무차별 폭행한 전직 보디빌더 구속…아내도 조사 예정(종합)
                </p>
                <p className="text-[13px]">05월 31일 16:14</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex items-center justify-center p-2 border-t-2">
        <div className="flex flex-row items-center gap-3">
          <div className="flex items-center justify-center rounded-full border w-[36px] h-[36px] border-gray-300">
            <KeyboardArrowLeftIcon />
          </div>
          <p className="text-[15px]">언론사 더보기</p>
          <p className="text-[15px]">8/21</p>
          <div className="flex items-center justify-center rounded-full border w-[36px] h-[36px] border-gray-300">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMini;
