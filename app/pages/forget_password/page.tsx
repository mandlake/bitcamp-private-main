"use client";

import { useRouter } from "next/navigation";

function ForgotPassword() {
  const router = useRouter();
  return (
    <>
      <div className="w-screen h-screen flex align-middle justify-center items-center">
        <div className="font-roboto w-[25vw] h-[50vh] border border-gray-700 flex flex-col justify-between items-center gap-[1.111vh] bg-gray-200 p-[1.111vh]">
          <h1>Forgot Password</h1>
          <div>
            <div className="flex flex-col">
              <p>Enter Your Current Password</p>
              <input type="password" />
            </div>
            <div>
              <p>Enter Your New Password</p>
              <input type="password" />
            </div>
          </div>
          <button onClick={() => router.push(`/pages/login`)} className="">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
