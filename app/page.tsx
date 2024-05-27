"use client";

import { useRouter } from "next/navigation";
import Login from "./pages/login/page";

function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-[0.5vh]">
          <div className="text-[#E0E7E9] bg-[#354649] flex flex-col justify-center items-center align-middle w-[41.53vw] h-[18.85vh]">
            <h1 className="font-normal text-[9.77vh] my-[4.54vh]">Lawmate</h1>
          </div>
          <div className=" justify-start flex flex-col gap-[0.5vh]">
            <div className="bg-[#E0E7E9] w-[20vw] hover:bg-gradient-to-r from-[#354649] to-[#E0E7E9] transition duration-500 ease-in-out px-[2vw]">
              <button
                onClick={() => router.push(`/pages/join`)}
                className="text-[#6C7A89] hover:text-[#E0E7E9] transition duration-500 ease-in-out"
              >
                회원가입으로 이동 -&gt;
              </button>
            </div>
            <div className="bg-[#E0E7E9] w-[20vw] hover:bg-gradient-to-r from-[#354649] to-[#E0E7E9] transition duration-500 ease-in-out px-[2vw]">
              <button
                onClick={() => router.push(`/pages/login`)}
                className="text-[#6C7A89] hover:text-[#E0E7E9] transition duration-500 ease-in-out"
              >
                로그인으로 이동 -&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
