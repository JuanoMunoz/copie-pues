import { useEffect, useState } from "react";
export default function useInitialPhrase(points) {
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    const phrases = [
      "Más feo que pegarle a la mamá",
      "¿su mamá sabe coser?, que le cosa esta!",
      "si el río suena... el fin de semana me pierdo",
      "emanuel calvo villa no cabe en ninguna silla",
      "el que sube como palma... cae como coco",
      "¿pa que le sirve a usted la dignidad?",
      "no se habla de bruno... no... no... no",
      "paila si no le gusta mi motilado no lo mire",
      "su mamá nunca fue de propiedad privada",
      "tenga fe en las personas, no solo en las leyes",
      "aquí tienen su hpta casa pintada",
      "pa que zapatos si no hay casa?",
      "aquí viendo mi fecha de nacimiento porque hay gente que cree que nací ayer",
      "no mijo hubiera sabido que era así de perro, lo hubiera escogido de mejor raza",
      "bebe usted es boba las veinticuatro horas o descansa?",
      "eso, hagase coger pereza",
      "mamá responsable que se respete le tiene un padre a cada hijo",
      "hoy me rio pero esa tusa me volvió technera",
      "jajajajajajaja perdón la alegría",
      "la real academia española no ha encontrado palabra par describir lo serio que me debe tratar",
      "malo emitir un vocablo y exteriorizar el pensamiento",
      "vea ya ni me trate, lease cien años de seriedad.",
      "él no es perro, es super indeciso",
      "si colombia gana pruebo ese tal aguardiente, a ver a qué sabe!",
      "bb pero usted quiere vivir arrunchada, parece recién nacido.",
      "por eso es que no salen adelante, por estar pendiente de uno!",
      "la otra volviendo con el ex diciendo que está cambiando... cambiando pero de moza",
    ];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    console.log();

    const letters = phrase.split("");
    setLetters(letters);
  }, [points]);
  return { letters };
}
