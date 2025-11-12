"use client";

import { Code2, Palette, Zap, Users, Accessibility, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Crafting visually compelling, user-centered designs and high-fidelity prototypes for web and mobile platforms.",
    skills: [
      "Figma", "Adobe XD", "Canva", "Illustrator", "Photoshop", "Wireframing", "Prototyping", "Storyboarding", "After Effects"
    ],
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "UI/UX Specializations",
    description: "Designing seamless digital experiences with attention to interaction, usability, and scalable design systems.",
    skills: [
      "UI/UX Design", "Design Systems", "Responsive Design", "Micro-interactions", "User Flows", "Wireframing", "Prototyping"
    ],
    color: "text-secondary",
  },
      {
    icon: Sparkles,
    title: "Creative & Visual Skills",
    description: "Combining aesthetic principles with technical execution to deliver polished and functional digital experiences.",
    skills: [
      "Color Theory", "Typography", "Visual Hierarchy", "Brand Identity", "Illustration", "Motion Design", "3D Interaction"
    ],
    color: "text-accent",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, scalable, and interactive web applications using modern frameworks and best practices.",
    skills: [
      "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "ShadCN/UI", "Framer Motion", "GSAP", "Three.js", "WordPress (Elementor)"
    ],
    color: "text-primary",
  },
  {
    icon: Accessibility,
    title: "Accessibility & Inclusive Design",
    description: "Ensuring products are usable by all users, meeting WCAG standards and accessibility best practices.",
    skills: [
      "WCAG 2.1", "ARIA", "Screen Readers", "Keyboard Navigation", "Color Contrast", "Semantic HTML", "Accessible Forms"
    ],
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Collaboration & Process",
    description: "Working effectively in cross-functional teams using agile methods, design thinking, and user-centered processes.",
    skills: [
      "Agile", "Scrum", "Git & Version Control", "Design Thinking", "User Research", "A/B Testing", "Stakeholder Management"
    ],
    color: "text-accent",
  },
];


  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Skills &{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A diverse toolkit combining technical proficiency with creative vision and accessibility expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon
                className={`w-12 h-12 mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}
              />
              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{category.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="rounded-full text-sm border border-white/20 px-3 py-1"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#1C1C1C",
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
