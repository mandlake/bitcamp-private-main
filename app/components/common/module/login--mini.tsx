"use client";

import { useRouter } from "next/navigation";
import { logoCss } from "../logo";

const LoginMini = () => {
  const router = useRouter();
  return (
    <div className="h-[125px] flex flex-col justify-between items-center">
      <p>Lawmate를 더 안전하고 편리하게 이용하세요</p>
      <button
        onClick={() => router.push("pages/login")}
        className="flex bg-[var(--color-Harbor-third)] border-2 border-[var(--color-Harbor-sec)] h-[60px] rounded-md w-[375px] text-white items-center justify-center gap-3"
      >
        <span
          className={`${logoCss} text-[18px] text-[var(--color-Harbor-first)]`}
        >
          LAWMATE
        </span>
        <p>로그인</p>
      </button>
      <div className="flex flex-row justify-center items-center text-[var(--color-Naver-dark-gray)] gap-3">
        <div>
          <p onClick={() => router.push("pages/forget_id")}>아이디 찾기</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="w-[0.1px] h-[16px] bg-[rgba(0,0,0,0.2)]"></div>
          <p onClick={() => router.push("pages/forget_password")}>
            비밀번호 찾기
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="w-[0.1px] h-[16px] bg-[rgba(0,0,0,0.2)]"></div>
          <p onClick={() => router.push("pages/join")}>회원가입</p>
        </div>
      </div>
    </div>
  );
};

export default LoginMini;
