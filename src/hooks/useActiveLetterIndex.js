import { useEffect,useState } from "react";
export default function useActiveLetter(letters) {
  const [activeLetter, setActiveLetter] = useState("");
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  useEffect(() => {
    setActiveLetter(letters[activeLetterIndex]);
  }, [activeLetterIndex, letters]);
  return {
    activeLetter,
    setActiveLetter,
    setActiveLetterIndex,
    activeLetterIndex,
  };
}