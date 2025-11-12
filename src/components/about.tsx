"use client";

import { CalendarHeart, Palette, Code2, Flame } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing intuitive, accessible, and visually compelling interfaces that delight users and enhance experiences.",
      color: "text-primary",
    },
    {
      icon: CalendarHeart,
      title: "Interactive Experiences",
      description:
        "Crafting smooth animations, micro-interactions, and thoughtful transitions that bring designs to life.",
      color: "text-secondary",
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Turning designs into functional, responsive, and performant applications using modern frameworks and clean code.",
      color: "text-accent",
    },
    {
      icon: Flame,
      title: "Attention to Detail",
      description:
        "Combining creativity and technical precision to ensure pixel-perfect designs with seamless usability across devices.",
      color: "text-secondary",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Where&nbsp;
            <span className="bg-gradient-to-r from-[#FFC857] via-[#E86A92] to-[#2B96A8] bg-clip-text text-transparent">
              Design Meets Code
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I’m a UI/UX designer and frontend developer who transforms ideas into interactive, user-friendly, and visually striking digital experiences. 
            I combine creativity with technical expertise to craft interfaces that look beautiful and work flawlessly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical dotted line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2 hidden md:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 2px, transparent 2px, transparent 8px)",
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                {/* Timeline circle */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 hidden md:flex">
                  <div className="w-6 h-6 rounded-full border-4 border-gray-300 bg-[#FFC857]" />
                </div>

                {/* Content container */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-0 md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    <feature.icon
                      className={`w-12 h-12 mb-4 ${feature.color} inline-block`}
                    />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
