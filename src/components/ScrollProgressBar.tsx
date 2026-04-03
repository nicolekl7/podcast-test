import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const transcriptEl = document.getElementById("transcript-area");
      if (!transcriptEl) return;

      const start = transcriptEl.offsetTop - window.innerHeight * 0.3;
      const end = transcriptEl.offsetTop + transcriptEl.offsetHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollTop < start) {
        setProgress(0);
      } else if (scrollTop > end) {
        setProgress(100);
      } else {
        setProgress(((scrollTop - start) / (end - start)) * 100);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (progress < 1) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-[3px] bg-border/20">
      <div
        className="h-full bg-primary transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
