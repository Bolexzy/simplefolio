import React from "react";

const Languages = () => {
  return (
    <div className="flex gap-4 items-center flex-wrap justify-around">
      <div className="flex gap-2 items-center">
        <p className="text-[12px] md:text-[14px] tracking-wide font-[400] text-white">
          English
        </p>
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500  hover:scale-150 transition ease-in-out delay-150 duration-300 "></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-[12px] md:text-[14px] tracking-wide font-[400] text-white">
          Yoruba
        </p>
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-slate-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-[12px] md:text-[14px] tracking-wide font-[400] text-white">
          Spanish
        </p>
        <div className="flex gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-slate-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-slate-500 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
