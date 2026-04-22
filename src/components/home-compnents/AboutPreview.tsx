"use client"
import Image from "next/image"
import { Flame, Target, Sparkles } from "lucide-react"
import React from "react"
import { motion } from "framer-motion"

export default function AboutPreview() {
  return (
    <section className="relative z-10 py-8 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[0.7fr_1.3fr] gap-10 items-center">
        {/* Portrait */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 * 0.1, duration: 0.5 }}
          className="relative overflow-hidden order-2 md:order-1"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/40 to-transparent" />

          <Image
            src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=900&q=80"
            alt="Sayem salam training in the gym"
            width={600}
            height={800}
            className="w-full object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 * 0.1, duration: 0.5 }}
          className="space-y-6 grow order-1 md:order-2"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="space-y-3">
            <h2 className="text-4xl md:text-4xl font-black leading-tight">
              Built Through Discipline. Proven Through Results.{" "}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I’m an<span className="text-foreground"> ISSA Certified </span>
              Fitness Expert with{" "}
              <span className="text-foreground">8 years</span> of natural
              training experience, and I’ve helped deliver{" "}
              <span className="text-foreground"> 1100+</span> online
              transformations through disciplined coaching, real strategy, and
              results that speak for themselves. With a growing community of
              <span className="text-foreground"> 22k+ </span>on Facebook,{" "}
              <span className="text-foreground"> 44.3k+ </span>
              on Instagram, and{" "}
              <span className="text-foreground"> 245.4k+ </span> on TikTok, I
              share the mindset, training, and standards it takes to build a
              stronger body and a higher level of self.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded border border-white/10 bg-white/5 p-4 space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Flame className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Philosophy
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Fuel habits, not quick fixes. We stack small, repeatable wins
                that build unstoppable momentum.
              </p>
            </div>

            <div className="rounded border border-white/10 bg-white/5 p-4 space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Why work with me
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Clear direction, candid feedback, and data-driven adjustments
                every week so you never wonder what to do next.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
