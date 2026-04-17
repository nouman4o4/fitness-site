"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Target,
  Users,
  Flame,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  Zap,
  ShieldCheck,
} from "lucide-react"

export default function TransformationPage() {
  const featuredTransformations = [
    {
      name: "Mark S.",
      timeline: "24 Weeks",
      stats: "-25kg Fat Loss | +4kg Muscle",
      story:
        "Alex's coaching changed my life. I never thought I could achieve this physique in just 6 months. The precision in nutrition and training was the key.",
      before:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
  ]

  const gallery = [
    {
      name: "Sarah L.",
      result: "+8kg Lean Muscle",
      before:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400",
      after:
        "https://images.unsplash.com/photo-1548691905-57c36cc8d93f?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "James R.",
      result: "Body Recomposition",
      before:
        "https://images.unsplash.com/photo-1507398941214-57f5162123bf?auto=format&fit=crop&q=80&w=400",
      after:
        "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Ahmed K.",
      result: "-15kg Fat Loss",
      before:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400",
      after:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Zainab M.",
      result: "Strength & Tone",
      before:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400",
      after:
        "https://images.unsplash.com/photo-1548691905-57c36cc8d93f?auto=format&fit=crop&q=80&w=400",
    },
  ]

  const stats = [
    { label: "Transformations", value: "120+", icon: Trophy },
    { label: "Success Rate", value: "98%", icon: Target },
    { label: "Years Exp", value: "5+", icon: Flame },
    { label: "Reach", value: "50k+", icon: Users },
  ]

  const testimonials = [
    {
      name: "David K.",
      text: "The most professional coaching I've ever experienced. Alex truly cares about your results.",
      image: "https://picsum.photos/seed/david/100/100",
    },
    {
      name: "Emily W.",
      text: "I've tried many programs, but this is the only one that actually stuck. Highly recommend!",
      image: "https://picsum.photos/seed/emily/100/100",
    },
  ]

  const processSteps = [
    {
      title: "Assessment",
      desc: "Deep dive into your history, goals, and current lifestyle.",
    },
    {
      title: "Personalized Plan",
      desc: "Custom nutrition and training protocols built for you.",
    },
    {
      title: "Training & Nutrition",
      desc: "Execution of the science-based strategy with precision.",
    },
    {
      title: "Accountability",
      desc: "Weekly check-ins and daily support to ensure progress.",
    },
    {
      title: "Transformation",
      desc: "The final result of consistency and elite coaching.",
    },
  ]

  return (
    <main className="flex-1 pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070"
            alt="Transformation Hero"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
              Real <span className="text-orange">Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Witness the power of elite coaching. These aren't just photos;
              they are stories of discipline, grit, and total transformation.
            </p>
            <div className="pt-4">
              <Button className="bg-orange hover:bg-white text-black font-black py-8 px-12 rounded-none uppercase tracking-[0.2em] text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,125,38,0.3)]">
                Start Your Transformation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Transformation Showcase */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Featured <span className="text-orange">Spotlight</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              A deep dive into elite success
            </p>
          </div>

          {featuredTransformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface border border-white/5 p-8 lg:p-16"
            >
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="relative overflow-hidden aspect-[3/4] border border-white/10">
                  <img
                    src={item.before}
                    alt="Before"
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-[10px] font-bold uppercase px-3 py-1.5 tracking-widest border border-white/10">
                    Before
                  </div>
                </div>
                <div className="relative overflow-hidden aspect-[3/4] border border-orange/30">
                  <img
                    src={item.after}
                    alt="After"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-orange text-black text-[10px] font-bold uppercase px-3 py-1.5 tracking-widest">
                    After
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none border-2 border-orange/10 -m-4 hidden lg:block" />
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-4xl font-black uppercase tracking-tighter italic">
                    {item.name}
                  </h3>
                  <div className="flex gap-4 text-orange font-bold text-sm uppercase tracking-widest">
                    <span>{item.timeline}</span>
                    <span className="text-white/20">|</span>
                    <span>{item.stats}</span>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 h-12 w-12 text-orange/10" />
                  <p className="text-gray-300 text-lg leading-relaxed italic relative z-10">
                    "{item.story}"
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="border-orange/50 text-orange hover:bg-orange hover:text-black rounded-none uppercase font-bold tracking-widest px-10 py-6"
                  >
                    Read Full Story
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Transformations Gallery */}
      <section className="py-24 bg-secondary-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Results <span className="text-orange">Gallery</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Proven across all body types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-surface"
              >
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full relative overflow-hidden border-r border-white/5">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-1/2 h-full relative overflow-hidden">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl font-black uppercase tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-orange font-bold text-xs uppercase tracking-widest">
                    {item.result}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-white uppercase text-[10px] font-black tracking-[0.2em] flex items-center gap-2"
                    >
                      View Details <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transformation Stats / Impact Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center space-y-4 group"
              >
                <div className="mx-auto w-16 h-16 bg-orange/10 flex items-center justify-center rounded-full group-hover:bg-orange transition-colors duration-500">
                  <stat.icon className="h-8 w-8 text-orange group-hover:text-black transition-colors" />
                </div>
                <div className="space-y-1">
                  <p className="text-5xl font-black text-white">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials / Success Stories */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Success <span className="text-orange">Stories</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              In their own words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-surface border border-border p-10 space-y-8 relative group hover:border-orange/30 transition-all"
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-orange/5 group-hover:text-orange/10 transition-colors" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-orange text-orange"
                    />
                  ))}
                </div>
                <p className="text-xl text-gray-300 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-orange/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-black uppercase tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      Verified Transformation
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Process Behind The Results */}
      <section className="py-24 bg-secondary-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              The <span className="text-orange">Blueprint</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              How we engineer excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative space-y-6 text-center"
              >
                <div className="w-16 h-16 bg-black border border-orange/20 flex items-center justify-center mx-auto relative z-10">
                  <span className="text-2xl font-black text-orange">
                    {i + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-black uppercase tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Mindset / Philosophy Section */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="text-[20vw] font-black uppercase italic leading-none whitespace-nowrap select-none">
            DISCIPLINE DISCIPLINE DISCIPLINE
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Zap className="h-12 w-12 text-orange mx-auto mb-8 animate-pulse" />
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
                Transformation is <br />
                <span className="text-orange">Not Optional.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed italic">
                "Results don't come from what you do occasionally. They come
                from what you do consistently. I provide the map, but you must
                walk the path."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                {
                  icon: ShieldCheck,
                  title: "Execution",
                  desc: "Strategy is nothing without action.",
                },
                {
                  icon: Zap,
                  title: "Discipline",
                  desc: "Motivation gets you started, discipline keeps you going.",
                },
                {
                  icon: Target,
                  title: "Precision",
                  desc: "Every macro, every rep, every hour counts.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-4 p-8 bg-white/5 border border-white/5"
                >
                  <item.icon className="h-8 w-8 text-orange mx-auto" />
                  <h4 className="font-black uppercase tracking-widest text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Conversion CTA */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=2070"
            alt="Final CTA Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
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
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
                Your Turn <span className="text-orange">Next?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
                The next transformation story we tell could be yours. Stop
                waiting and start executing.
              </p>
            </div>

            <div className="flex justify-center pt-6">
              <Button className="bg-orange hover:bg-white text-black font-black py-8 px-16 rounded-none uppercase tracking-[0.2em] text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(242,125,38,0.4)]">
                Apply for Coaching <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
