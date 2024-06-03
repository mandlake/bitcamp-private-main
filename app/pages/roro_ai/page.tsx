const RoroAIPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-[0.5vh]">
          <div className="text-[var(--color-Harbor-firth)] bg-[var(--color-Harbor-first)] flex flex-col justify-center items-center align-middle w-[41.53vw] h-[18.85vh]">
            <p className="font-normal text-[2.92vh]">How can I help you?</p>
          </div>
          <div className=" justify-start flex flex-col gap-[0.5vh]">
            <input
              className="w-[41.53vw] h-[6.15vh] rounded-lg border border-[rgba(0,0,0,0.1)]"
              type="text"
              placeholder="Type your question here"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoroAIPage;
