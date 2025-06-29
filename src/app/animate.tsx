import { useEffect, useState } from "react";

export default function AnimatedLine() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-1 bg-gray-200 z-50">
      <div
        className="w-full bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 transition-all duration-200 ease-out"
        style={{ height: `${scrollHeight}%` }}
      />
    </div>
  );
}
