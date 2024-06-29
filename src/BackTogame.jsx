/* eslint-disable react/prop-types */
export default function BackToGame({ isPlaying }) {
  return (
    <article
      className={`absolute text-3xl ${
        isPlaying ? "opacity-0" : ""
      } animate-pulse transition-all ease-out duration-150 delay-200 italic font-type -mt-10 md:-mt-24 font-semibold text-white`}
    >
      {isPlaying ? (
        <div>
          ¡<span className="text-red-700">Vuelva</span> para seguir pues!
        </div>
      ) : (
        <div>
          ¡Dele <span className="text-red-700">click</span> para empezar pues !
        </div>
      )}
    </article>
  );
}
