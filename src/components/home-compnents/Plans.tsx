"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Heart, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const router = useRouter()
  const plans = [
    {
      name: "Starter Plan",
      price: "10,000",
      desc: "Perfect for beginners starting their journey.",
      features: [
        { name: "Custom Workout Plan", included: true },
        { name: "Nutrition Guide", included: true },
        { name: "Weekly Check-ins", included: false },
        { name: "24/7 Chat Support", included: false },
        { name: "Form Correction", included: false },
        { name: "Supplement Advice", included: false },
      ],
      popular: false,
    },
    {
      name: "Transformation Plan",
      price: "25,000",
      desc: "Our most popular plan for serious results.",
      features: [
        { name: "Custom Workout Plan", included: true },
        { name: "Nutrition Guide", included: true },
        { name: "Weekly Check-ins", included: true },
        { name: "24/7 Chat Support", included: true },
        { name: "Form Correction", included: false },
        { name: "Supplement Advice", included: false },
      ],
      popular: false,
      badge: "Best Value",
    },
    {
      name: "Elite Coaching",
      price: "45,000",
      desc: "Advanced coaching for peak performance.",
      features: [
        { name: "Custom Workout Plan", included: true },
        { name: "Nutrition Guide", included: true },
        { name: "Weekly Check-ins", included: true },
        { name: "24/7 Chat Support", included: true },
        { name: "Form Correction", included: true },
        { name: "Supplement Advice", included: true },
      ],
      popular: false,
    },
    {
      name: "One-on-One Coaching",
      price: "80,000",
      desc: "The ultimate personalized fitness experience.",
      features: [
        { name: "Custom Workout Plan", included: true },
        { name: "Nutrition Guide", included: true },
        { name: "Weekly Check-ins", included: true },
        { name: "24/7 Chat Support", included: true },
        { name: "Form Correction", included: true },
        { name: "Personal Sessions", included: true },
      ],
      popular: true,
    },
  ]
  return (
    <div>
      <section className="py-8 md:py-24 bg-secondary-bg">
        <div className="mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Coaching <span className="text-orange">Plans</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Invest in your ultimate transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative bg-surface border flex flex-col p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-orange shadow-[0_0_40px_rgba(242,125,38,0.15)] scale-105 z-10"
                    : "border-border hover:border-orange/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange text-black font-black uppercase text-[10px] tracking-[0.2em] px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-orange transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plan.desc}
                  </p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-orange">PKR</span>
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                      / Month
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span
                        className={`font-bold ${feature.included ? "text-orange" : "text-gray-600"}`}
                      >
                        {feature.included ? "✔" : "✖"}
                      </span>
                      <span
                        className={
                          feature.included
                            ? "text-gray-200"
                            : "text-gray-500 line-through"
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>{" "}
                <Button
                  className={`w-full py-6 rounded-none uppercase font-black tracking-widest transition-all duration-300 ${
                    plan.popular
                      ? "bg-orange hover:bg-white text-black"
                      : "bg-white/5 hover:bg-orange text-white hover:text-black border border-white/10 hover:border-orange"
                  }`}
                >
                  <Link href={`/apply?plan=${plan.name.toLocaleLowerCase()}`}>
                    Get Started
                  </Link>
                </Button>
                {/* Decorative Background Element */}
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-orange/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-orange" />
              <span className="text-[10px] uppercase font-bold tracking-widest">
                Results Driven
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-orange" />
              <span className="text-[10px] uppercase font-bold tracking-widest">
                Satisfaction Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange" />
              <span className="text-[10px] uppercase font-bold tracking-widest">
                Expert Accountability
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
