const FooterPage = () => {
  return (
    <>
      <div className=" flex flex-col w-[1280px] items-first justify-center">
        <div className="border-y border-gray-200">
          <span className=" font-semibold flex p-3 flex-row">LAWMATE</span>
        </div>
        <div className="border-y border-gray-200">
          <div className="flex p-3 flex-row gap-5">
            <span className=" font-semibold">partners</span>
            <div className="flex gap-3">
              <span>Naver</span>
            </div>
          </div>
          <div className="flex p-4 flex-row gap-5">
            <span className=" font-semibold">Developers</span>
            <div className="flex gap-3">
              <span>
                <span className=" font-semibold">PO</span> : 김호주
              </span>
              <span>
                <span className=" font-semibold">frontend</span> : 김시온
              </span>
              <span>
                <span className=" font-semibold">spring user</span> : 박주하
              </span>
              <span>
                <span className=" font-semibold">spring admin</span> : 양동규
              </span>
              <span>
                <span className=" font-semibold">Langchain</span> : 김호현
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
