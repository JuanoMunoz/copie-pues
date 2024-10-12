import confetti from "canvas-confetti";
import { useState, useEffect } from "react";
export default function useLogicGame(reset, points) {
  const [counter, setCounter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOnPause, setIsOnPause] = useState(false);
  useEffect(() => {
    if (!isPlaying) return;
    if (counter <= 0) {
      setIsPlaying(false);
      setCounter(localStorage.getItem("time") || 30);
      if (points >= 5) {
        setTimeout(() => {
          confetti({
            spread: 180,
            colors: ["#FFEA00", "0000ff", "ff0000"],
            particleCount: 400,
          });
        }, 400);
      }
      reset();

      return;
    }
    if (isOnPause) return;
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter, isPlaying, isOnPause, reset, points]);
  return {
    counter,
    isPlaying,
    isOnPause,
    setIsOnPause,
    setIsPlaying,
    setCounter,
  };
}
