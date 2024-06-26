"use client";

import { forgotPassword } from "@/app/api/post/route";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ForgotPassword() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleForgotPassword = async () => {
    try {
      await forgotPassword(formData);
      router.push(`/pages/login`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex align-middle justify-center items-center">
        <div className="font-roboto w-[25vw] h-[50vh] border border-gray-700 flex flex-col justify-between items-center gap-[1.111vh] bg-gray-200 p-[1.111vh]">
          <h1>Forgot Password</h1>
          <div>
            <div className="flex flex-col">
              <p>Enter Your username</p>
              <input
                type="text"
                onChange={(e: any) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <p>Enter Your New Password</p>
              <input
                type="password"
                onChange={(e: any) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>
          <button onClick={() => handleForgotPassword()} className="">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
