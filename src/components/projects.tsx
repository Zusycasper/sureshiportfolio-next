"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projectsData } from "@/lib/project-data"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const allTechnologies = Array.from(new Set(projectsData.flatMap((p) => p.technologies)))
  const filteredProjects = filter === "all" ? projectsData : projectsData.filter((p) => p.technologies.includes(filter))

  const ProjectCard = ({ project, index }: { project: (typeof projectsData)[0]; index: number }) => (
    <Card
      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors"
          style={{ color: project.accentColor }}
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" className="rounded-full bg-transparent" asChild>
            <Link href={`/projects/${project.id}`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              More Info
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Featured
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Projects from my CV, showcasing my skills, creativity, and experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All Projects
          </Button>
          {allTechnologies.slice(0, 6).map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              onClick={() => setFilter(tech)}
              className="rounded-full"
            >
              {tech}
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="basis-full">
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
