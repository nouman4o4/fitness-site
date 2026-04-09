"use client"
import React from "react"
import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const programs = [
  {
    title: "One on One Coaching",
    benefit:
      "The ultimate personalized experience with 24/7 support for maximum results.",
    image: "/images/1-on-1.jfif",
  },
  {
    title: "Fat Loss Coaching",
    benefit:
      "Shed stubborn fat while maintaining lean muscle mass with precision nutrition.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Muscle Gain Program",
    benefit:
      "Build a powerful, aesthetic physique with science-backed hypertrophy training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Home Workout Plan",
    benefit:
      "Get elite results from the comfort of your own home with minimal equipment.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  },
]

export default function Programs() {
  return (
    <div>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Our <span className="text-accent">Programs</span>
              </h2>
              <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
                Choose your path to physical excellence
              </p>
            </div>
            <Button
              variant="outline"
              className="border-accent/50 text-orange hover:bg-orange hover:text-black rounded uppercase cursor-pointer font-bold tracking-widest"
            >
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative h-112.5 overflow-hidden border border-white/10"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-orange transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {program.benefit}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 cursor-pointer h-auto text-orange uppercase font-bold tracking-widest text "
                    >
                      <Link
                        href={"/programs"}
                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                      >
                        Learn More <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
