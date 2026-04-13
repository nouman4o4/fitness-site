"use client"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react"

export default function ApplyPage() {
  return (
    <main className="flex-1 pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=2070"
            alt="Apply for Coaching"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter  leading-none">
              Apply for <span className="text-orange">Coaching</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Serious inquiries only. If you're ready to commit 100% to your
              transformation, fill out the form below to start your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Application Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-16">
            {/* Left Side: Info & Trust */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tight italic">
                  Why <span className="text-orange">Apply?</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Alex only takes on a limited number of clients each month to
                  ensure every individual receives the elite attention and
                  precision coaching required for guaranteed results.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Clock,
                    title: "48h Response Time",
                    desc: "We review every application personally and respond within 48 hours.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Strict Confidentiality",
                    desc: "Your data and transformation journey are kept 100% private.",
                  },
                  {
                    icon: Star,
                    title: "Limited Slots",
                    desc: "Currently accepting only 5 new clients for the upcoming month.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <item.icon className="h-6 w-6 text-orange" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold uppercase tracking-tight text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-secondary border border-border space-y-4">
                <div className="flex items-center gap-2 text-orange">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Elite Standard
                  </span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "I don't just sell programs; I build physiques. If you are
                  accepted, expect the hardest but most rewarding work of your
                  life."
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  — Alex Saqib
                </p>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-surface border border-border p-8 md:p-12 shadow-2xl"
              >
                <form className="space-y-8">
                  {/* Group 1: Personal Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight border-b border-foreground/2Z0 pb-4">
                      Personal <span className="text-orange">Information</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                          Age
                        </label>
                        <input
                          type="number"
                          placeholder="25"
                          className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                          Fitness Goal
                        </label>
                        <select className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors">
                          <option>Fat Loss</option>
                          <option>Muscle Gain</option>
                          <option>Body Recomposition</option>
                          <option>Strength & Performance</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group 2: Physical Stats */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight border-b border-white/10 pb-4">
                      Physical <span className="text-orange">Stats</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                          Current Weight (kg)
                        </label>
                        <input
                          type="number"
                          placeholder="85"
                          className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                          Target Weight (kg)
                        </label>
                        <input
                          type="number"
                          placeholder="75"
                          className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors placeholder:text-gray-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group 3: Experience */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight border-b border-white/10 pb-4">
                      Training <span className="text-orange">Experience</span>
                    </h3>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                        How long have you been training?
                      </label>
                      <select className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors">
                        <option>Beginner (0-6 months)</option>
                        <option>Intermediate (6 months - 2 years)</option>
                        <option>Advanced (2+ years)</option>
                        <option>Elite (Competitive level)</option>
                      </select>
                    </div>
                  </div>

                  {/* Group 4: Message */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight border-b border-white/10 pb-4">
                      Additional <span className="text-orange">Notes</span>
                    </h3>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                        Tell us more about your challenges
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share any injuries, dietary restrictions, or specific challenges you're facing..."
                        className="w-full bg-black border border-border p-4 text-white focus:border-orange focus:outline-none transition-colors placeholder:text-gray-700 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button className="w-full bg-orange hover:bg-white text-black font-black py-8 rounded-none uppercase tracking-[0.2em] text-lg transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(242,125,38,0.2)] flex items-center justify-center gap-3">
                      Submit Application <Send className="h-5 w-5" />
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-6">
                      By submitting, you agree to our terms of service and
                      privacy policy.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
