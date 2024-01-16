import React from "react";

const Stat = () => {
  return (
    <div className="dark:shadow-primaryDark shadow-blue-200 bg-transparent shadow-lg w-full rounded-lg flex">
      <div className="flex items-center justify-center sm:p-2 2xl:p-5 w-[33%]">
        {/* section */}
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="w-full items-center justify-center gap-1 text-center text-sm sm:text-lg lg:text-xl text-dark/50 dark:text-white/50">
            <h3>Clients</h3>
          </div>
          {/* icon  */}
          <div className="w-full flex items-center justify-around text-pink">
            <p className="text-xs sm:text-sm lg:text-base text-dark dark:text-white font-medium">
              30+
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 lg:w-6 lg:h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="divider w-[1px] h-8 sm:h-10 lg:h-12 bg-slate-500 sm:mx-1"></div>

      <div className="flex items-center justify-center sm:p-2 w-[33%]">
        {/* section */}
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="w-full items-center justify-center gap-1 text-center sm:text-lg lg lg:text-xl text-dark/50 dark:text-white/50">
            <h3>Projects</h3>
          </div>
          {/* icon  */}
          <div className="w-full flex items-center justify-around text-pink ">
            <p className="text-xs sm:text-sm lg:text-base text-dark dark:text-white font-medium">
              50+
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 lg:w-6 lg:h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="divider w-[1px] h-8 sm:h-10 lg:h-12 bg-slate-500  sm:mx-1"></div>
      <div className="flex items-center justify-center sm:p-2 w-[33%]">
        {/* section */}
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="w-full items-center justify-center text-center gap-1 sm:text-lg lg lg:text-xl text-dark/50 dark:text-white/50">
            <h3>Experience</h3>
          </div>
          {/* icon  */}
          <div className="w-full flex items-center justify-around text-pink">
            <p className="text-xs text-black dark:text-white sm:text-sm lg:text-base font-medium">
              3+
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 lg:w-6 lg:h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
