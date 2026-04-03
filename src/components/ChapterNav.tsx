import { useState, useEffect } from "react";

const chapters = [
  { label: "Intro", id: "intro" },
  { label: "Cutting Through the Noise", id: "cutting-noise" },
  { label: "The Multi-Gigawatt Reality", id: "multi-gigawatt" },
  { label: "Designing the Ecotone", id: "ecotone" },
  { label: "Breaking the Copper Ceiling", id: "copper-ceiling" },
  { label: "Takeaways", id: "tldr" },
];

const ChapterNav = () => {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20">
      <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
        Chapters
      </h3>
      <ul className="space-y-1">
        {chapters.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm py-1.5 transition-colors border-l-2 pl-3 ${
                active === id
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterNav;
