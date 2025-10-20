import { useRef, useState, useEffect } from "react";

export default function SplitText({
  text = "YO YO",
  className = "",
  align = "center", // "left" or "center"
}) {
  const [activeIndex, setIndex] = useState(null);
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const letterClassName =
    "inline h-1/2 select-none overflow-y-hidden leading-none transition-all duration-300 ease-out whitespace-pre";

  const getLetterClasses = (index) => {
    const isActive = index === activeIndex;
    const isAdjacent =
      activeIndex !== null &&
      (index === activeIndex - 1 || index === activeIndex + 1);
    const isNearby =
      activeIndex !== null &&
      (index === activeIndex - 2 || index === activeIndex + 2);

    return {
      topTranslate: isActive
        ? "-translate-y-5"
        : isAdjacent
        ? "-translate-y-3"
        : isNearby
        ? "-translate-y-1"
        : "",
      bottomTranslate: isActive
        ? "translate-y-5"
        : isAdjacent
        ? "translate-y-3"
        : isNearby
        ? "translate-y-1"
        : "",
    };
  };

  // ✅ determine flex justification based on `align`
  const justifyClass = align === "left" ? "justify-start" : "justify-center";

  return (
    <div
      className={`relative w-full text-4xl font-black uppercase text-gray-800 md:text-5xl lg:text-9xl ${className}`}
    >
      {/* invisible placeholder to preserve height */}
      <div className="invisible leading-none">{text}</div>

      {/* visible animated text */}
      <div className={`absolute top-0 flex h-full ${justifyClass} w-full`}>
        {text.split("").map((letter, index) => {
          const { topTranslate, bottomTranslate } = getLetterClasses(index);
          return (
            <div
              key={index}
              onMouseEnter={() => {
                if (timer.current) clearTimeout(timer.current);
                setIndex(index);
              }}
              onMouseLeave={() => {
                timer.current = setTimeout(() => setIndex(null), 300);
              }}
              className="relative inline-flex h-full flex-col leading-none cursor-sword"
            >
              <span
                className={`${letterClassName} ${topTranslate}`}
                style={{ willChange: "transform" }}
              >
                {letter}
              </span>
              <span
                className={`${letterClassName} ${bottomTranslate}`}
                style={{ willChange: "transform" }}
              >
                <span className="absolute -translate-y-1/2 leading-none">
                  {letter}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
