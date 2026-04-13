"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Dumbbell,
  Target,
  Users,
  Trophy,
  ArrowRight,
  ClipboardCheck,
  MessageSquare,
  Settings,
  LineChart,
} from "lucide-react"
import ProgramCards from "./components/ProgramCards"
import Link from "next/link"
import Image from "next/image"

export default function ProgramsPage() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Apply for Coaching",
      desc: "Fill out the application form detailing your goals, history, and current lifestyle.",
    },
    {
      icon: MessageSquare,
      title: "Consultation",
      desc: "We'll have a deep-dive assessment to align on expectations and strategy.",
    },
    {
      icon: Settings,
      title: "Program Setup",
      desc: "Receive your fully personalized training and nutrition protocols within 48 hours.",
    },
    {
      icon: LineChart,
      title: "Ongoing Coaching",
      desc: "Weekly check-ins and daily support to ensure you stay on track and see results.",
    },
  ]

  const audiences = [
    {
      title: "Beginners",
      desc: "Starting your fitness journey and need a clear, safe, and effective roadmap.",
      icon: Users,
    },
    {
      title: "Intermediate Lifters",
      desc: "Wanting structured programs to break through plateaus and gain serious muscle.",
      icon: Dumbbell,
    },
    {
      title: "Busy Professionals",
      desc: "Needing high-efficiency workouts and accountability that fits a tight schedule.",
      icon: Target,
    },
    {
      title: "Transformation Seekers",
      desc: "Focused on aesthetics and wanting a complete body recomposition.",
      icon: Trophy,
    },
  ]

  return (
    <main className="flex-1 pt-20">
      {/* 1. Intro Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            width={600}
            height={400}
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070"
            alt="Training Background"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Elite <span className="text-orange">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
              Precision-engineered coaching protocols designed for those who
              demand nothing less than physical excellence.
            </p>
            <div className="pt-4">
              <Link href={"#programs"}>
                <Button className="bg-orange hover:bg-white text-black font-black py-8 px-12 rounded-none uppercase tracking-[0.2em] text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,125,38,0.3)]">
                  Choose Your Program
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Program Cards Section */}
      <ProgramCards />

      {/* 3. Who This Is For Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  Who Is This <span className="text-orange">For?</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Our programs are not for everyone. They are for those who are
                  ready to put in the work and demand elite results.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {audiences.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-secondary border border-border space-y-4 group hover:border-orange/30 transition-all"
                  >
                    <item.icon className="h-8 w-8 text-orange" />
                    <h4 className="font-bold uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/programs/programs-for.jpg"
                alt="Elite Athlete"
                className="w-full h-full object-cover grayscale border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange p-8 hidden md:block">
                <p className="text-black font-black text-4xl uppercase tracking-tighter italic">
                  98%
                </p>
                <p className="text-black/80 font-bold uppercase tracking-widest text-xs">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process / How It Works Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              The <span className="text-orange">Process</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Your journey to excellence in 4 steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-surface border border-border flex items-center justify-center rounded-full group hover:border-orange transition-all duration-500">
                  <step.icon className="h-8 w-8 text-orange group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 left-2 w-8 h-8 bg-orange text-black font-black flex items-center justify-center rounded-full text-sm">
                    {i + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/last-cta-bg.jpg"
            alt="Final CTA Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/10 to-black/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Ready to <span className="text-orange">Commit?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
                Don't wait for the perfect moment. Take the first step towards
                your elite physique today.
              </p>
            </div>

            <div className="flex justify-center pt-6">
              <Link href={"/apply"}>
                <Button className="bg-orange hover:bg-white text-black font-black py-8 px-16 rounded-none uppercase tracking-[0.2em] text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(242,125,38,0.4)]">
                  Apply for Coaching <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
