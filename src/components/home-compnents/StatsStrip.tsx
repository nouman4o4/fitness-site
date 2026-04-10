"use client"
import React from "react"
import { motion } from "framer-motion"

const stats = [
  {
    stat: "5+",
    title: "Years of experience",
    helper: "Certified coaching focused on sustainable, long-term progress.",
  },
  {
    stat: "500+ ",
    title: "Clients coached",
    helper: "Personalized plans and check-ins tailored to each lifestyle.",
  },
  {
    stat: "120+ ",
    title: "Transformations",
    helper: "Documented physique, strength, and habit wins across members.",
  },
]

export default function StatsStrip() {
  return (
    <section className="relative z-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded border border-accent/40 bg-white/5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded bg-linear-to-br from-accent/10 via-transparent to-transparent opacity-70 pointer-events-none" />
              {/* <div className="absolute inset-0 rounded border border-white/10 pointer-events-none" /> */}
              <div className="relative p-6 flex flex-col gap-2">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-foreground">
                  {stat.stat}
                </h1>
                <h2 className="text-2xl md:text-3xl font-black leading-tight text-foreground">
                  {stat.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.helper}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
