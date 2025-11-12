"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/lib/project-data"
import Image from "next/image"

type ProjectType = (typeof projectsData)[0]

export default function ProjectDetail() {
  const params = useParams()
  const [project, setProject] = useState<ProjectType | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    if (!params?.id) return
    // projectsData uses numeric `id` in your example, so parse it
    const idNum = Number.parseInt(params.id as string)
    const found = projectsData.find((p) => p.id === idNum)
    setProject(found || null)
    setActiveImageIndex(0)
  }, [params])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FFC857] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Project not found</h1>
          <Link href="/#projects">
            <Button className="rounded-full bg-[#1C1C1C] text-black hover:bg-[#1C1C1C]/80">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFC857]/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFC857]/40 backdrop-blur-sm border-b border-[#1C1C1C]/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#projects">
            <Button variant="ghost" className="rounded-full gap-2 text-[#1C1C1C] hover:bg-black/80">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-[#1C1C1C] mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-[#1C1C1C]/80 mb-8 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {project.technologies?.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-white text-[#1C1C1C] rounded-full px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Videos (heroVideo + showcaseVideo) */}
      {/* <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6 text-center">Project Demonstration</h2>

            <div className="grid gap-8 md:grid-cols-2">
              

            </div>
          </div>
        </div>
      </section> */}

      {/* Image Gallery */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {project.images && project.images.length > 0 ? (
              <>
                <div className="relative mb-8 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="aspect-video bg-white/20 relative">
                   {/* Hero Video (autoPlay muted, if provided) */}
              {project.heroVideo ? (
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-black">
                  <video
                    className="w-full h-full object-cover"
                    poster={project.images?.[0] || "/placeholder.svg"}
                    autoPlay
                    muted
                    preload="auto"
                    playsInline
                    onEnded={(e) => {
                      const v = e.currentTarget as HTMLVideoElement
                      const count = Number(v.dataset.playCount || "0") + 1
                      v.dataset.playCount = String(count)
                      if (count < 3) {
                        v.currentTime = 0
                        void v.play()
                      }
                    }}
                  >
                    <source src={project.heroVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              ) : (
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center p-8">
                  <p className="text-[#1C1C1C]/70">Hero video not available.</p>
                </div>
              )}
                  </div>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                        activeImageIndex === index ? "ring-4 ring-white shadow-lg scale-105" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={image} alt={`Thumbnail ${index + 1}`} width={150} height={150} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="p-8 rounded-xl bg-white/20 text-center">No images available for this project.</div>
            )}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">About This Project</h2>
              <p className="text-lg text-[#1C1C1C]/80 leading-relaxed mb-8">{project.fullDescription}</p>

              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#1C1C1C]/80">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1C1C1C] mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">The Challenge</h3>
                <p className="text-[#1C1C1C]/80 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">The Solution</h3>
                <p className="text-[#1C1C1C]/80 leading-relaxed">{project.solution}</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">The Result</h3>
                <p className="text-[#1C1C1C]/80 leading-relaxed">{project.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/50 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6">Interested in this project?</h2>
            <p className="text-lg text-[#1C1C1C]/80 mb-8">Here’s a quick look at how it turned out.</p>
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-3xl mx-auto">
                            {/* Showcase Video (controls only) */}
              {project.showcaseVideo ? (
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-black">
                  <video controls className="w-full h-full object-cover" poster={project.images?.[1] || project.images?.[0] || "/placeholder.svg"}
                  autoPlay
                    loop
                    muted
                    preload="auto"
                    playsInline
                    >
                    <source src={project.showcaseVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              ) : (
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center p-8">
                  <p className="text-[#1C1C1C]/70">Showcase video not available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-12 md:py-20 border-t border-[#1C1C1C]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projectsData.slice(0, 3).map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-white/20">
                    <Image src={p.images?.[0] || "/placeholder.svg"} alt={p.title} width={600} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1C1C] group-hover:text-[#1C1C1C]/70 transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
