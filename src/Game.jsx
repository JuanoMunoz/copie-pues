/* eslint-disable react/prop-types */
import { useRef } from "react";
export default function Game({
  setIsPlaying,
  letters,
  activeLetterIndex,
  activeLetter,
  setActiveLetterIndex,
  setActiveLetter,
  setIsOnPause,
  setPoints,
  isPlaying,
  inputValue,
  setInputValue,
  gameRef,
}) {
  const inputRef = useRef();

  const handleInitGame = () => {
    setIsPlaying(true);
    setActiveLetter(letters[activeLetterIndex]);
    gameRef.current.classList.remove("blur-md");
    inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.value.slice(-1) !== activeLetter) {
      gameRef.current.classList.add("container");
      setTimeout(() => {
        gameRef.current.classList.remove("container");
      }, 400);
      return;
    }
    if (activeLetterIndex < letters.length - 1) {
      setActiveLetterIndex((prevState) => {
        return prevState + 1;
      });
    } else if (activeLetterIndex === letters.length - 1) {
      setActiveLetterIndex(0);
      setPoints((prevState) => prevState + 1);
    }
    setInputValue(event.target.value);
  };
  const handleOnMouseLeave = () => {
    setIsOnPause(true);
    gameRef.current.classList.add("blur-md");
    inputRef.current.blur();
  };
  const handleOnMouseEnter = () => {
    if (!isPlaying) return;
    setIsOnPause(false);
    gameRef.current.classList.remove("blur-md");
    inputRef.current.focus();
  };
  return (
    <article
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleInitGame}
      ref={gameRef}
      className=" -mt-20  outline-none blur-md cursor-pointer transition-all duration-150 delay-75  py-2 px-1  flex  text-2xl font-mono  md:text-4xl flex-wrap  w-full  md:gap-3.5 "
    >
      {letters.map((letter, idx) => {
        return letter === " " ? (
          <div key={idx} className="w-5"></div>
        ) : (
          <div
            className={`${
              idx < activeLetterIndex ? "text-white" : "text-gray-400"
            }`}
            key={idx}
          >
            {letter}
          </div>
        );
      })}
      <input
        className="w-1 opacity-0 fixed top-0"
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
      />
    </article>
  );
}
