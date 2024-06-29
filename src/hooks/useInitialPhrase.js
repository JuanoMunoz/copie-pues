import { useEffect, useState } from "react";
export default function useInitialPhrase(points) {
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    const phrases = ["Más feo que pegarle a la mamá","¿su mamá sabe coser?, que le cosa esta!", "si el río suena... el fin de semana me pierdo","emanuel calvo villa no cabe en ninguna silla","el que sube como palma... cae como coco"]
    const phrase = phrases[Math.floor(Math.random()*phrases.length)]
    console.log()

    const letters = phrase.split("");
    setLetters(letters);
  }, [points]);
  return { letters };
}