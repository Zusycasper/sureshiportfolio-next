"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  // Map mouse movement to a small offset
  const getOffset = (factor: number) => ({
    transform: `translate(${mouse.x * factor}px, ${mouse.y * factor}px)`,
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fcf8e7]">
      
      {/* ------------------------- Floating Blob Background ------------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full filter blur-3xl mix-blend-multiply will-change-transform"
          style={{
            backgroundColor: "#FFC857",
            width: "300px",
            height: "300px",
            top: "10%",
            left: "5%",
            opacity: 0.6,
            animation: "blob1 25s ease-in-out infinite",
            ...getOffset(0.02), // slight mouse influence
          }}
        />
        <div
          className="absolute rounded-full filter blur-3xl mix-blend-multiply will-change-transform"
          style={{
            backgroundColor: "#E86A92",
            width: "450px",
            height: "450px",
            top: "70%",
            left: "60%",
            opacity: 0.4,
            animation: "blob2 30s ease-in-out infinite",
            ...getOffset(-0.015),
          }}
        />
        <div
          className="absolute rounded-full filter blur-3xl mix-blend-multiply will-change-transform"
          style={{
            backgroundColor: "#2B96A8",
            width: "200px",
            height: "200px",
            top: "40%",
            left: "30%",
            opacity: 0.5,
            animation: "blob3 28s ease-in-out infinite",
            ...getOffset(0.01),
          }}
        />
      </div>

      {/* ------------------------- Hero Content ------------------------- */}
      <div className="w-full px-4 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center w-full mb-8">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#1C1C1C]/20 text-[#1C1C1C] px-4 py-2 rounded-full mt-20 animate-fade-in-up">
              <span className="text-xl">👋</span>
              <span className="text-sm font-medium">Hello!</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#1C1C1C]">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#FFC857] via-[#E86A92] to-[#2B96A8] bg-clip-text text-transparent">
                Sureshi
              </span>
              ,
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1C1C] whitespace-normal">
              UI/UX Designer & Frontend Developer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8 items-center">
            <div className="hidden lg:flex flex-col items-start justify-center text-left">
              <p className="text-lg text-[#1C1C1C]/70 leading-relaxed">
                I craft intuitive, interactive interfaces that blend design & frontend expertise.
                <br />
                Let&apos;s build something amazing together.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full order-first md:order-none">
              <div className="relative w-full h-[300px] flex items-center justify-center">
                <div
                  className="absolute bottom-0"
                  style={{
                    backgroundColor: "#FFC857",
                    opacity: 0.3,
                    width: "600px",
                    height: "300px",
                    bottom: -110,
                    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                    transform: "rotate(360deg)",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="/images/sureshi.png"
                  alt="Sureshi Siriwardena"
                  width={480}
                  height={420}
                  className="relative object-contain bottom-[-60px] animate-fade-in-up"
                  style={{ maxHeight: "400px", width: "auto" }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#FFC857] text-[#FFC857]" />
                  ))}
                </div>
                <h3 className="text-4xl font-bold text-[#1C1C1C] mb-2">3 Years+</h3>
                <p className="text-lg text-[#1C1C1C]/70">Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:hidden w-full mb-8">
            <p className="text-lg text-[#1C1C1C]/70 leading-relaxed text-center">
              I craft intuitive, interactive interfaces that blend design & frontend expertise.
              <br />
              Let&apos;s build something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up items-center justify-center w-full">
            <Button className="bg-[#1C1C1C] text-white hover:bg-[#1C1C1C]/90 text-lg px-8 py-6 rounded-full">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2 bg-[#1C1C1C]/15 text-[#1C1C1C] border-[#1C1C1C]/30 hover:bg-[#1C1C1C]/20"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* ------------------------- Keyframes ------------------------- */}
      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          25% { transform: translate(50px,-30px) scale(1.1); }
          50% { transform: translate(-40px,20px) scale(0.9); }
          75% { transform: translate(30px,-10px) scale(1.05); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          25% { transform: translate(-60px,40px) scale(1.1); }
          50% { transform: translate(40px,-30px) scale(0.95); }
          75% { transform: translate(-30px,20px) scale(1.05); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          25% { transform: translate(30px,30px) scale(1.1); }
          50% { transform: translate(-20px,-25px) scale(0.95); }
          75% { transform: translate(25px,10px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
