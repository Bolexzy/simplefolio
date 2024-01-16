import Image from "next/image";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import Stat from "./Stat";
import DarkLightIcon from "./components/DarkLightIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:p-8 xl:p-0">
      {/* dark and light mode toggle */}
      <div className="fixed h-full top-[80%] left-[85%] lg:left-[80%] z-50 ">
        <div
          className="tooltip tooltip-left tooltip-primary"
          data-tip="Toggle Dark/Light Mode"
        >
          <DarkLightIcon />
        </div>
      </div>

      {/* top bar, name and button  */}
      <div className="z-10 flex w-full items-center justify-between text-sm md:mb-8 lg:mb-10 lg:-mt-8">
        <h1 className="text-white text-center text-[18px] sm:text-xl md:text-3xl lg:text-4xl  lg:text-[34px] font-[500] tracking-wide">
          Boluwatife Emmanuel
        </h1>
        <button className="btn w-[101px] md:w-[150px] md:h-[60px] lg:w-[170px] h-[42px] bg-white/50 rounded-[1.5rem] text-white text-[1rem] font-[500] tracking-[0.11rem] text-center padding-[0.8rem] hover:scale-110 transition ease-in-out duration-300 border-0">
          Resume
        </button>
      </div>

      {/* main info box  */}
      <div className="w-full relative">
        {/* main info box  */}
        <section className="w-full px-[1.5rem] md:px-[4rem] py-[3rem] mt-[3rem] rounded-[1.5rem] bg-gradient-light dark:bg-gradient-dark relative">
          {/* profile pic circle  */}
          {/* <div className="w-[100px] md:w-[150px] md:h-[150px] h-[100px] lg:w-[170px] lg:h-[170px] p-3 bg-[#15141F] rounded-full absolute -top-5 left-5 md:-top-10 md:left-10 lg:-top-15"> */}
          {/* <img src="/assets/profile.png" className="w-full" /> */}
          {/* <div
              style={{
                backgroundImage: "url('/assets/boluwatife.png')",
                backgroundRepeat: "no-repeat",
              }}
              className="bg-cover bg-center w-full h-full rounded-full bg-[#3E3D45]"
            ></div> */}
          <div className="avatar absolute -top-5 left-8 sm:left-12 md:-top-10 md:left-10 lg:left-16 lg:-top-15">
            <div className=" w-[64px] md:w-[112px] md:h-[140px] h-[80px] lg:w-[120px] lg:h-[150px] rounded-full ring ring-pink dark:ring-pinkDark  ring-offset-base-100 ring-offset-4">
              <Image
                width={90}
                height={90}
                priority
                alt="boluwatife emmanuel"
                src={"/assets/profile2.png"}
                className="rounded-full w-full"
              />
            </div>
          </div>
          {/* </div> */}

          {/* social icons boxes */}
          {/* design */}
          <div className="w-full absolute  left-[5%] md:left-[15%] top-[6%] sm:top-[8%]  z-20 animate-pulse">
            <div
              className="w-[40px] h-[40px] md:w-[80px] md:h-[50px] xl:w-[100px]"
              style={{
                backgroundColor: "transparent",
                opacity: 0.8,
                backgroundImage:
                  "radial-gradient(#78713D 0.8px, transparent 0.5px)",
                backgroundSize: "10px 10px",
              }}
            ></div>
            <div
              className="w-[40px] h-[40px] md:w-[80px] md:h-[40px] lg:h-[50px]  xl:w-[100px] -translate-y-2 translate-x-8 xl:translate-x-16"
              style={{
                backgroundColor: "transparent",
                opacity: 0.8,
                backgroundImage:
                  "radial-gradient(#F25F29 0.8px, transparent 0.5px)",
                backgroundSize: "10px 10px",
              }}
            ></div>
          </div>
          <Socials />

          <div className="w-full flex flex-col items-end sm:items-center md:items-end lg:items-center xl:items-end 2xl:items-center justify-center  lg:mt-4">
            <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-widest text-dark dark:text-white font-medium text-right lg:text-center ">
              Frontend Developer
            </h2>
            <p
              className="text-xs sm:text-base md:text-lg bg-gradient-pink text-transparent bg-clip-text my-2 max-w-[220px] sm:max-w-full  tracking-widest text-left lg:text-center"
              style={{ fontFamily: "Alegreya Sans" }}
            >
              Helping brands thrive in the digital world
            </p>
          </div>

          <div className="w-full my-10 sm:my-16">
            <Stat />
          </div>

          {/* about me article  */}
          <article className="mt-[50px] lg:mt-[90px] flex flex-col gap-5">
            {/* section header */}
            <div className="flex gap-3 flex items-center">
              <div className="w-[31px] md:w-[40px] md:h-[40px] h-[31px] bg-[#02000F] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                  />
                </svg>
              </div>
              <div className="w-auto shadow-md shadow-pink dark:shadow-pinkDark p-2 flex items-center justify-center h-[25px] bg-gradient-orange relative text-center -skew-x-12">
                <h3 className=" text-white text-base md:text-xl lg:text-2xl tracking-wide italic font-medium">
                  ABOUT ME
                </h3>
              </div>
            </div>

            {/* section body  */}
            <p
              className="text-sm sm:text-base  lg:text-lg tracking-wide font-[400] text-dark/75 dark:text-[#c7c7c7] leading-6"
              style={{ fontFamily: "Alegreya Sans" }}
            >
              Hey there! 👋 I'm Boluwatife Emmanuel, an experienced frontend
              developer, having a deep understanding of software development
              principles and best practices, I am dedicated to turning ideas
              into innovative web applications. 🖥️
            </p>

            <p
              className="text-sm sm:text-base lg:text-lg tracking-wide font-[400] text-dark/75 dark:text-[#c7c7c7] leading-6"
              style={{ fontFamily: "Alegreya Sans" }}
            >
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first. 💻✨
            </p>
          </article>

          {/* languages article  */}
          <article className="mt-[50px] flex flex-col gap-5">
            {/* section header */}
            <div className="flex gap-3  items-center">
              <div className="w-[31px] h-[31px]  md:w-[40px] md:h-[40px] bg-[#02000F] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="20"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#ffffff"
                    d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"
                  />
                </svg>
              </div>
              <div className="w-auto shadow-md shadow-pink dark:shadow-pinkDark p-2 flex items-center justify-center h-[25px] bg-gradient-orange relative text-center -skew-x-12">
                <h3 className=" text-white text-base md:text-xl lg:text-2xl tracking-wide italic font-medium">
                  LANGUAGES
                </h3>
              </div>
            </div>

            {/* section body  */}
            <Languages />
          </article>

          {/* skills  article  */}
          <article className="mt-[48px] flex flex-col gap-5">
            {/* section header */}
            <div className="flex gap-3 items-center">
              <div className="w-[31px] h-[31px  md:w-[40px] md:h-[40px] bg-[#02000F] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                  />
                </svg>
              </div>
              <div className="w-auto shadow-md shadow-pink dark:shadow-pinkDarkp-2 flex items-center justify-center h-[25px] bg-gradient-orange relative text-center -skew-x-12">
                <h3 className=" text-white text-base md:text-xl lg:text-2xl  tracking-wide italic font-medium">
                  SKILLS
                </h3>
              </div>
            </div>

            {/* section body  */}
            <div className="">
              <Skills />
            </div>
          </article>

          {/* projects slidess */}

          <article className="min-w-full h-auto mt-14 p-4 overflow-x-auto -ml-[1.5rem] -mr-[1.5rem] ">
            <Projects />
          </article>

          {/* contact section */}
          <article className="mt-14 border-y-[1px] border-[#A2A2A2] h-[50px] text-dark dark:text-white/75 text-[12px] md:text-[16px] flex items-center justify-around lg:p-12">
            {/* telephone  */}
            <div className="flex gap-3 justify-between items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="14"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>
              </div>
              <p>0-811-651-8424</p>
            </div>

            {/* mail  */}
            <a href="mailto:bolexzyy@gmail.com">
              <div className="flex gap-3 justify-between items-center hover:underline underline-offset-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="14"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                </div>
                <p>bolexzyy@gmail.com</p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
