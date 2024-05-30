"use client";

import { useRouter } from "next/navigation";
import Navigation from "./components/common/module/default-box";
import SearchBox from "./components/common/module/search-box";
import IconsBox from "./components/common/module/icons-box";

function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[63vw] h-[1000vh]">
          <Navigation />
          <div className="flex flex-col justify-center items-center">
            <SearchBox />
            <IconsBox />
          </div>
          <div>
            <div>
              <div className="광고">
                <img src="https://ssl.pstatic.net/melona/libs/1497/1497607/5208297d6dcb504d914e_20240520140159458.jpg" />
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div className="login">
                <input
                  type="submit"
                  value="로그인"
                  onClick={() => router.push("pages/login")}
                />
              </div>
              <div className="광고">
                <img src="https://ssl.pstatic.net/melona/libs/1491/1491376/1781400040bea3eeea04_20240401144028928.jpg" />
              </div>
              <div></div>
              <div></div>
              <div className="광고">
                <img src="https://s.pstatic.net/static/www/mobile/edit/20240513_1095/upload_171557831212478K5t.png" />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
