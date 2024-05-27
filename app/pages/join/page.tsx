"use client";

import { useRouter } from "next/navigation";

function Join() {
  const router = useRouter();
  return (
    <>
      <div className="w-screen h-screen flex align-middle justify-center items-center">
        <div className="font-roboto w-[25vw] h-[50vh] border border-gray-700 flex flex-col justify-center items-center gap-[1.111vh] bg-gray-200 p-[1.111vh]">
          <p>회원가입</p>
          <div>
            <p>이름</p>
            <input type="text" />
          </div>
          <div>
            <p>아이디</p>
            <input type="text" />
          </div>
          <div>
            <p>비밀번호</p>
            <input type="password" />
          </div>
          <div>
            <p>비밀번호 확인</p>
            <input type="password" />
          </div>
          <button onClick={() => router.push(`/pages/login`)}>회원가입</button>
        </div>
      </div>
    </>
  );
}

export default Join;
