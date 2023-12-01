import React from "react";

const Projects = () => {
  return (
    <div className="flex gap-4 items-center my-auto">
      <a href="https://gallery-hngx.vercel.app/" target="_blank">
        <div className="w-[150px] md:w-[160px] lg:w-[200px] lg:h-40 h-32 flex-shrink-0 rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300">
          <div
            style={{
              backgroundImage: "url('/assets/gallery-hngx.png')",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain bg-center w-full h-full rounded-lg"
          ></div>
          <p className="text-white text-sm text-center -mt-3 shadow">Gallery DND</p>
        </div>
      </a>
      {/* public/assets/energyrenewableworld.png */}
      <a href="https://energyrenewableworld.home.blog/" target="_blank">
        <div className="w-[150px] md:w-[160px] lg:w-[200px] lg:h-40 h-32 flex-shrink-0 rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300">
          <div
            style={{
              backgroundImage: "url('/assets/energyrenewableworld.png')",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain bg-center w-full h-full rounded-lg"
          ></div>
          <p className="text-white text-sm text-center -mt-3 shadow">
            EnergyRenewableWorld
          </p>
        </div>
      </a>

      {/* public/assets/travel-jounal.png */}
      <a href="https://imaginative-dango-63fa75.netlify.app/" target="_blank">
        <div className="w-[150px] md:w-[160px] lg:w-[200px] lg:h-40 h-32 flex-shrink-0 rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300">
          <div
            style={{
              backgroundImage: "url('/assets/travel-jounal.png')",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain bg-center w-full h-full rounded-lg"
          ></div>
          <p className="text-white text-sm text-center -mt-3 shadow">
            Travel Diary
          </p>
        </div>
      </a>
      {/* public/assets/movie-box.png */}
      <a href="https://movie-box-hngx.vercel.app/" target="_blank">
        <div className="w-[150px] md:w-[160px] lg:w-[200px] lg:h-40 h-32 flex-shrink-0 rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300">
          <div
            style={{
              backgroundImage: "url('/assets/movie-box.png')",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain bg-center w-full h-full rounded-lg"
          ></div>
          <p className="text-white text-sm text-center -mt-3 shadow">
            Movie Box
          </p>
        </div>
      </a>

      {/* public/assets/quizwhiz.png */}
      <a href="https://quizwhiz-72df8.web.app/" target="_blank">
        <div className="w-[150px] md:w-[160px] lg:w-[200px] lg:h-40 h-32 flex-shrink-0 rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300">
          <div
            style={{
              backgroundImage: "url('/assets/quizwhiz.png')",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain bg-center w-full h-full rounded-lg"
          ></div>
          <p className="text-white text-sm text-center -mt-3 shadow">
            QuizWhiz
          </p>
        </div>
      </a>

      {/* public/assets/business-card.png */}
      <a href="https://heartfelt-pasca-64edc1.netlify.app/" target="_blank">
        <div className="w-[150px] md:w-[160px] lg:w-[200px] lg:h-40 h-32 flex-shrink-0 rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300">
          <div
            style={{
              backgroundImage: "url('/assets/business-card.png')",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-contain bg-center w-full h-full rounded-lg"
          ></div>
          <p className="text-white text-sm text-center -mt-3 shadow">
            Business Card
          </p>
        </div>
      </a>
    </div>
  );
};

export default Projects;
