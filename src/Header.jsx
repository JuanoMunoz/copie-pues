/* eslint-disable react/prop-types */
export default function Header({ isPlaying, counter }) {
  return (
    <section className="-mt-32 w-full text-center pt-20 ">
      {isPlaying ? (
        <p
          className={`text-5xl font-type md:text-6xl ${
            counter <= 10
              ? counter <= 5
                ? "text-red-700"
                : "text-red-600"
              : "text-orange-500"
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
  );
}
