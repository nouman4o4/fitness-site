"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Target, Trophy } from "lucide-react"
import Link from "next/link"

export default function FinalCta() {
  return (
    <div>
      <section className="relative py-20 overflow-hidden bg-background">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070"
            alt="Final CTA Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />
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
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Stop Settling. <br />
                <span className="text-orange">Start Winning.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
                Elite coaching for those who demand excellence. No excuses, just
                results. Are you ready to commit?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link href={"/apply"} className="cursor-pointer">
                {" "}
                <Button className="bg-orange cursor-pointer hover:bg-white text-black font-black py-8 px-12 rounded-none uppercase tracking-[0.2em] text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,125,38,0.3)]">
                  Apply for Coaching Now
                </Button>
              </Link>
              <Link href={"/programs"} className="cursor-pointer">
                {" "}
                <Button
                  variant="outline"
                  className="border-white/20 cursor-pointer text-white hover:bg-white hover:text-black font-black py-8 px-12 rounded-none uppercase tracking-[0.2em] text-lg w-full sm:w-auto transition-all duration-300"
                >
                  View Plans
                </Button>
              </Link>
            </div>

            {/* Urgency Indicators */}
            <div className="pt-12 flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  Limited Slots for April
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-orange" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  100% Commitment Required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-orange" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  Results Guaranteed
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange/50 to-transparent" />
      </section>
    </div>
  )
}
