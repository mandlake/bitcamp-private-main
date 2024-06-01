import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const WeatherMiniPage = () => {
  return (
    <>
      <div>
        <header className="p-3 flex flex-row justify-between items-center border-b-2 border-gray-100">
          <h1 className="text-[15px] font-[800]">날씨</h1>
          <p className="text-[13px]">서울시 남가좌동</p>
        </header>
        <main className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center m-3">
              <WbSunnyOutlinedIcon className=" text-[100px] p-2" />
              <div className="flex flex-col">
                <span className="text-[40px] tracking-tighter">21.1°</span>
                <span className="text-[14px] font-bold tracking-tighter">
                  맑음
                </span>
              </div>
            </div>
            <div>
              <span className=" text-blue-400">16°</span>/
              <span className=" text-red-500">21°</span>
            </div>
            <div>
              미세 <span className=" text-blue-400">좋음</span> / 초미세{" "}
              <span className=" text-blue-400">좋음</span>
            </div>
          </div>
          <div className="p-1">
            <img src="/img/weather.png" className="w-48" />
          </div>
        </main>
      </div>
    </>
  );
};

export default WeatherMiniPage;
