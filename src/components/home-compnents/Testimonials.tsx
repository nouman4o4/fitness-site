"use client"
import { motion } from "framer-motion"
import React from "react"

export default function Testimonials() {
  return (
    <div>
      <section className="py-24 bg-background overflow-hidden">
        <div className="w-full px-4 md:px-6">
          <div className="max-w-3xl mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Client <span className="text-orange">Voices</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "David K.",
                text: "The most professional coaching I've ever experienced. Alex truly cares about your results.",
                image: "https://picsum.photos/seed/david/100/100",
                rating: 5,
              },
              {
                name: "Emily W.",
                text: "I've tried many programs, but this is the only one that actually stuck. Highly recommend!",
                image: "https://picsum.photos/seed/emily/100/100",
                rating: 5,
              },
              {
                name: "Michael T.",
                text: "The community and support are top-notch. You're not just a number here.",
                image: "https://picsum.photos/seed/michael/100/100",
                rating: 5,
              },
              {
                name: "Sophia M.",
                text: "Alex's nutrition advice is a game changer. I feel stronger and more energetic than ever.",
                image: "https://picsum.photos/seed/sophia/100/100",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative border border-border p-8 flex flex-col justify-between bg-card transition-all duration-500 hover:border-orange/40 hover:-translate-y-2"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-orange"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 17.134 17.151 14 21.017 14V11C15.4941 11 11.017 15.4772 11.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C9.12154 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12154 23 8.01697 23H5.01697C3.9124 23 3.01697 22.1046 3.01697 21ZM3.01697 21C3.01697 17.134 6.151 14 10.017 14V11C4.49414 11 0.0169678 15.4772 0.0169678 21H3.01697Z" />
                  </svg>
                </div>

                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <svg
                        key={index}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-orange"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange/20 group-hover:border-orange transition-colors"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange rounded-full flex items-center justify-center">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-white group-hover:text-orange transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      Verified Client
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
