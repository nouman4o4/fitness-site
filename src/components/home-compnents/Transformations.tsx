"use client"
import React from "react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"

export default function Transformations() {
  return (
    <div>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Real <span className="text-orange">Results</span>
              </h2>
              <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
                Witness the power of elite coaching
              </p>
            </div>
            <Button
              variant="outline"
              className="border-orange/50 text-orange hover:bg-orange hover:text-black rounded-none uppercase font-bold tracking-widest"
            >
              View All Results
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mark S.",
                result: "-25kg Fat Loss",
                blurb:
                  "Alex's coaching changed my life. I never thought I could achieve this physique in just 6 months.",
                before:
                  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
                after:
                  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
                duration: "24 Weeks",
              },
              {
                name: "Sarah L.",
                result: "+8kg Lean Muscle",
                blurb:
                  "The strength gains were incredible. The personalized nutrition plan made all the difference.",
                before:
                  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400",
                after:
                  "https://images.unsplash.com/photo-1548691905-57c36cc8d93f?auto=format&fit=crop&q=80&w=400",
                duration: "16 Weeks",
              },
              {
                name: "James R.",
                result: "Body Recomposition",
                blurb:
                  "From average to athletic. The 1-on-1 support and accountability is what I was missing.",
                before:
                  "https://images.unsplash.com/photo-1507398941214-57f5162123bf?auto=format&fit=crop&q=80&w=400",
                after:
                  "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=400",
                duration: "12 Weeks",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-border p-6 space-y-6 group hover:border-orange/30 transition-all duration-500 bg-card"
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-2 relative">
                  <div className="relative overflow-hidden aspect-3/4">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 text-[10px] font-bold uppercase px-2 py-1 tracking-widest">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden aspect-3/4">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-orange text-black text-[10px] font-bold uppercase px-2 py-1 tracking-widest">
                      After
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-orange font-bold text-sm uppercase tracking-widest">
                        {item.result}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                        Duration
                      </p>
                      <p className="text-sm font-bold">{item.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    "{item.blurb}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Summary */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-card py-12 border border-white/10">
            <div className="text-center space-y-2">
              <p className="text-4xl font-black text-orange">2500kg+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                Total Weight Lost
              </p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-black text-orange">800kg+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                Muscle Gained
              </p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-black text-orange">98%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                Success Rate
              </p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-black text-orange">15k+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                Training Hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
