"use client"
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowUp, ArrowUpRight, Flame, Heart, Play, Send } from "lucide-react"
import { Twitter } from "@hugeicons/core-free-icons"
import { BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
export default function Hero() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute top-0 bottom-0 right-0 w-1/2 z-0">
          <img
            // src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=2070"
            src={"/images/image-1.jfif"}
            alt="Gym Background"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="w-full px-4 md:px-6 relative z-10">
          <div className="">
            <div className=" space-y-8 z-30 relative">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
                Sculpted With Purpose. <br />
                <span className="text-accent md:text-5xl">
                  Backed By Discipline!
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Transform your body and mind with our cutting-edge equipment and
                dedicated trainers. Join us today and start your journey to a
                healthier, stronger you.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <Button className="bg-accent hover:bg-orange/90 text-foreground text-lg font-bold py-6 px-8 rounded flex items-center gap-2 group hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300">
                  Join us
                  <div className="bg-white/20 p-1 rounded-full rotate-45 group-hover:rotate-90 transition-transform">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-12 space-y-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover"
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt={`User ${i}`}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold">1100+ Online</p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">
                    Transformations
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Cards & Socials */}
            <div className=" absolute top-0 bottom-0 right-0 w-1/4 lg:w-1/2 h-125 hidden lg:block">
              <motion.div
                initial={{ x: 20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/4 left-0 bg-white/10 backdrop-blur-md border p-4 rounded-sm flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center">
                  <Flame className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-2xl font-black">30%</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Calories burned
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-5 right-3 bg-white/10 backdrop-blur-md p-4 rounded-sm flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-2xl font-black">70bpm</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Heart Rate
                  </p>
                </div>
              </motion.div>

              {/* Vertical Socials */}
              <div className="absolute right-4 top-1/3 -translate-y-1/2 flex flex-col gap-6 z-20">
                <a
                  href="#"
                  className="size-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-300"
                >
                  <Send className="size-5" />
                </a>
                <a
                  href="#"
                  className="size-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-300"
                >
                  <BsTwitter className="size-5" />
                </a>
                <a
                  href="#"
                  className="size-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-300"
                >
                  <FaFacebook className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
