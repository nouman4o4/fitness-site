"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
export default function ProgramCards() {
  const programs = [
    {
      title: "1 on 1 Elite Coaching",
      description:
        "The ultimate personalized experience with 24/7 support, form correction, and daily accountability.",
      benefits: ["Daily Access", "Form Video Reviews", "Priority Support"],
      price: "40,000",
      popular: false,
      image: "/images/1-on-1.jpg",
    },
    {
      title: "Fat Loss Coaching",
      description:
        "Shed stubborn fat while maintaining lean muscle mass with precision nutrition and high-intensity training.",
      benefits: ["Custom Macro Plan", "Cardio Protocols", "Weekly Adjustments"],
      price: "10,000",
      popular: false,
      image: "images/programs/fatloss.jpg",
    },
    {
      title: "Muscle Gain Program",
      description:
        "Build a powerful, aesthetic physique with science-backed hypertrophy training and surplus nutrition.",
      benefits: ["Hypertrophy Focus", "Strength Tracking", "Bulking Guide"],
      price: "25,000",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Home Workout Plan",
      description:
        "Get elite results from the comfort of your own home with minimal equipment and maximum efficiency.",
      benefits: ["Minimal Equipment", "Time Efficient", "Video Library"],
      price: "15,000",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
  ]

  return (
    <section id="programs" className="py-8 md:py-24 bg-black">
      <div className="px-4 md:px-6">
        <div className="mb-10 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter ">
            Our <span className="text-orange">Coaching</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
            Select the path that aligns with your goals
          </p>
        </div>

        <div className="space-y-10 md:space-y-20">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center bg-card border border-white/5 p-4 md:p-8 lg:p-12 relative overflow-hidden group hover:border-orange/20 transition-all duration-500`}
            >
              {program.popular && (
                <div className="absolute top-6 right-6 bg-orange text-black font-black uppercase text-[10px] tracking-[0.2em] px-4 py-1.5 rounded-full z-20">
                  Most Popular
                </div>
              )}

              {/* Supporting Visual */}
              <div className="w-full lg:w-1/2 aspect-video lg:aspect-square overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full md:h-full object-top md:object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Content Structure */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter  group-hover:text-orange transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-gray-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-orange">PKR</span>
                    <span className="text-3xl font-black">{program.price}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold ml-2">
                      / Month
                    </span>
                  </div>
                  <Link href={`/apply?program=${program.title}`}>
                    <Button className="bg-orange hover:bg-white text-black font-black py-8 px-6 rounded uppercase tracking-[0.2em] text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,125,38,0.2)]">
                      Select Program
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
