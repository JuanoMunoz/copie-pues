import { useState } from "react";

/* eslint-disable react/prop-types */
export function Points({ points }) {
  return (
    <div className="fixed top-5 left-3 md:text-2xl lg:text-3xl md:left-5 md:top-7 text-xl font-type text-white">
      Puntos:{" "}
      <span
        className={`${
          points <= 2
            ? "text-white"
            : points <= 4
            ? "text-green-50"
            : points <= 6
            ? "text-green-100"
            : points <= 8
            ? "text-green-200"
            : points <= 10
            ? "text-green-300"
            : points <= 12
            ? "text-green-400"
            : points <= 14
            ? "text-green-500"
            : "text-green-600"
        }`}
      >
        {points}
      </span>
      <span className="ml-1 text-green-400">{points >= 10 ? "!" : ""}</span>
    </div>
  );
}

export function Timer({ isPlaying, setCounter }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickTimer = () => {
    setIsOpen(!isOpen);
  };
  const handleOnMouseLeave = () => {
    setIsOpen(false);
  };
  const handleSetTime = (time) => {
    setCounter(time);
    setIsOpen(false);
    localStorage.setItem("time", time.toString());
  };
  return (
    <>
      {isOpen && (
        <div
          onMouseLeave={handleOnMouseLeave}
          className="fixed top-3 flex-col md:top-6  group justify-center lg:scale-110 items-center w-[8.6rem] md:w-44 h-32 flex right-[6.4rem] md:right-[7.5rem] lg:right-[7.8rem]  bg-[#252b2f] text-white  rounded-xl"
        >
          <div
            onClick={() => {
              handleSetTime(30);
            }}
            className="pl-2.5 pt-1  cursor-pointer hover:bg-gray-950 border-b-2 rounded-t-xl border-gray-500 h-11 w-full"
          >
            30 segundos{" "}
          </div>
          <div
            onClick={() => {
              handleSetTime(60);
            }}
            className="pl-2.5 pt-1 cursor-pointer hover:bg-gray-950 border-b-2 rounded-y-xl border-gray-500 h-11 w-full"
          >
            60 segundos
          </div>
          <div
            onClick={() => {
              handleSetTime(90);
            }}
            className="pl-2.5 pt-1 cursor-pointer hover:bg-gray-950 h-11 rounded-b-xl w-full"
          >
            90 segundos
          </div>
        </div>
      )}

      {!isPlaying && (
        <button
          onClick={handleClickTimer}
          className="fixed top-3 md:top-6 gap-3 group justify-center lg:scale-110 items-center flex pr-4   right-3 md:right-6 bg-[#252b2f] rounded-xl"
        >
          <div className="group-hover:bg-gray-900 border-r-4 px-0.5 border-gray-600 h-11 flex justify-center items-center transition-colors  rounded-l-xl duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-caret-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 6l-6 6l6 6v-12" />
            </svg>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-alarm"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M12 10l0 3l2 0" />
              <path d="M7 4l-2.75 2" />
              <path d="M17 4l2.75 2" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
