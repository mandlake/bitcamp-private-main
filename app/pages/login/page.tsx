"use client";

import { login } from "@/app/api/post/route";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await login(formData);
      if (response.tokens !== "") {
        router.push(`/pages/home/${response.username}`);
      } else {
        alert("로그인에 실패했습니다. 다시 시도하십시오.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("로그인에 실패했습니다. 다시 시도하십시오.");
    }
  };

  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center">
        <div
          id="login"
          className="font-roboto w-[25vw] h-[50vh] border border-gray-700 flex flex-col justify-between items-center gap-[1.111vh] bg-gray-200 p-[1.111vh]"
        >
          <div>
            <legend className="sr-only">소셜 로그인</legend>
            <button
              className="w-[24vw] h-[5vh] mt-[2vh] bg-white border border-gray-700 font-bold flex justify-center items-center gap-[1.111vh]"
              type="button"
            >
              <img
                src="https://w7.pngwing.com/pngs/344/344/png-transparent-google-logo-google-logo-g-suite-google-text-logo-symbol-thumbnail.png"
                className="w-[4vh] h-[4vh]"
              />
              Log in with Google
            </button>
          </div>
          <p>or</p>
          <div>
            <legend>일반 로그인</legend>
            <label htmlFor="username">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={(e: any) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-[24vw] h-[5vh] border border-gray-700 px-[1.111vw] mb-[1.111vh] bg-gray-200"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e: any) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-[24vw] h-[5vh] border border-gray-700 px-[1.111vw] mb-[1.111vh] bg-gray-200"
              />
            </label>
            <button
              onClick={() => handleLogin()}
              className="w-[24vw] h-[5vh] bg-white border border-gray-700 hover:bg-gray-700 hover:text-white  font-bold"
            >
              Login
            </button>
          </div>
          <div className="w-[24vw] flex flex-col justify-between items-center p-[1.111vh]">
            <p
              onClick={() => router.push(`/pages/forget_password`)}
              className="text-gray-700 text-sm"
            >
              Forgot your password?
            </p>
            <p
              onClick={() => router.push(`/pages/join`)}
              className="text-gray-700 text-sm"
            >
              Aren't you a member yet? Join now!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
