import { useRef, useState } from "react";
import useInitialPhrase from "./hooks/useInitialPhrase";
import useLogicGame from "./hooks/useLogicGame";
import useActiveLetter from "./hooks/useActiveLetterIndex";
import BackToGame from "./BackTogame";
import Header from "./Header";
import Game from "./Game";
import { Points, Timer } from "./Floating";

function App() {
  //GAME BASICS

  const [points, setPoints] = useState(0);
  const { letters } = useInitialPhrase(points);
  const {
    activeLetter,
    setActiveLetter,
    setActiveLetterIndex,
    activeLetterIndex,
  } = useActiveLetter(letters);
  const gameRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const reset = () => {
    setActiveLetterIndex(0);
    setInputValue("");
    setPoints(0);
    gameRef.current.classList.add("blur-md");
  };
  const {
    counter,
    isPlaying,
    isOnPause,
    setIsOnPause,
    setIsPlaying,
    setCounter,
  } = useLogicGame(reset, points);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center  gap-32 md:gap-52 flex-col bg-[#1a1e21]">
        {isPlaying && <Points points={points} />}
        <Timer isPlaying={isPlaying} setCounter={setCounter} />
        <Header counter={counter} isPlaying={isPlaying} />
        <section className="relative w-[21rem]   md:w-[43rem] lg:w-[50rem]   flex justify-center px-20 items-center ">
          {(!isPlaying || isOnPause) && <BackToGame isPlaying={isPlaying} />}
          <Game
            activeLetter={activeLetter}
            activeLetterIndex={activeLetterIndex}
            isPlaying={isPlaying}
            letters={letters}
            setActiveLetter={setActiveLetter}
            setActiveLetterIndex={setActiveLetterIndex}
            setPoints={setPoints}
            setIsOnPause={setIsOnPause}
            setIsPlaying={setIsPlaying}
            inputValue={inputValue}
            setInputValue={setInputValue}
            gameRef={gameRef}
          />
        </section>
      </div>
    </>
  );
}

export default App;
