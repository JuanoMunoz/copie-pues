import { act, useEffect, useState } from "react";

function App() {
  const [initialPhrase, setInitialPhrase] = useState([]);
  const [counter, setCounter] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLetter, setActiveLetter] = useState("");
  const [activeLetterIndex, setActiveLetterIndex] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const phrase =
      "No me abra los ojos que no le voy a echar gotas malparida perra sapa hpta";
    const words = phrase.split(" ");
    setInitialPhrase(words);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    if (counter <= 0) {
      setIsPlaying(false);
      setCounter(25);
      return;
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter, isPlaying]);

  const handleInitGame = () => {
    setIsPlaying(true);
    setActiveLetter(initialPhrase[wordIndex][activeLetterIndex]);
  };

  useEffect(() => {
    console.log(wordIndex, activeLetterIndex, activeLetter);
  }, [activeLetter, activeLetterIndex, wordIndex]);

  const handleOnKeyDown = (event) => {
    if (event.key !== activeLetter) {
      return;
    }
    if (activeLetterIndex >= initialPhrase[wordIndex].length) {
      setWordIndex(wordIndex + 1);
      setActiveLetterIndex(0);
      setActiveLetter(initialPhrase[wordIndex][activeLetterIndex]);
    }
    setActiveLetter(initialPhrase[wordIndex][activeLetterIndex]);
    setActiveLetterIndex(activeLetterIndex + 1);
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center gap-32 md:gap-52 flex-col bg-[rgb(34,34,34)]">
        <section className="-mt-16 w-full text-center pt-20 ">
          {isPlaying ? (
            <p
              className={`text-5xl font-type md:text-6xl ${
                counter <= 10 ? "text-red-600" : "text-orange-500"
              }`}
            >
              {counter}
            </p>
          ) : (
            <h2 className="text-5xl md:text-6xl font-type font-medium italic text-white">
              <span className="border-b-4 border-yellow-300">Copie</span>{" "}
              <span className="border-b-4 border-blue-600">pues</span>{" "}
              <span className="text-transparent font-serif bg-clip-text bg-gradient-to-b from-red-500 to bg-red-600">
                !
              </span>
            </h2>
          )}
        </section>
        <section
          onClick={handleInitGame}
          className=" outline-none  py-2 px-1 -mt-16 text-2xl font-mono flex md:text-5xl flex-wrap  w-[21rem] md:w-[43rem] lg:[50rem]  gap-1.5 md:gap-3.5 text-gray-400"
        >
          {initialPhrase.map((word, idx) => {
            return (
              <div className="flex  " key={idx}>
                {word.split("").map((letter, id) => (
                  <div
                    onKeyDown={handleOnKeyDown}
                    tabIndex={
                      wordIndex === idx && activeLetterIndex === id ? 0 : -1
                    }
                    className={`outline-none`}
                    key={id}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
