"use client"
import { motion, easeInOut, easeOut } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowUp, Flame, Heart } from "lucide-react"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import Link from "next/link"

export default function Hero() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/alex_saqib",
      icon: BsInstagram,
    },
    {
      href: "https://www.tiktok.com/@saqib_alex",
      icon: BsTiktok,
    },
    {
      href: "https://web.facebook.com/alexsaqibathletic",
      icon: FaFacebook,
    },
  ]

  const floatingAnimation = {
    initial: { x: 20, y: 20, opacity: 0 },
    enter: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
        repeat: 0,
      },
    },
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
  }

  return (
    <div>
      <section className="relative md:min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute top-0 bottom-0 right-0 w-1/2 z-0">
          <img
            // src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=2070"
            src={"/images/hero.jfif"}
            alt="Gym Background"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="w-full px-4 py-4 md:py-0 md:px-6 relative z-30">
          <div className="lg:w-5/6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1, duration: 0.5 }}
              className="space-y-8 z-20 relative"
            >
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
                <Link href={"/apply"}>
                  <Button className="bg-orange cursor-pointer hover:bg-white hover:text-accent-foreground text-foreground font-black py-6 px-14 rounded-none uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,125,38,0.3)]">
                    Join us
                    <div className="bg-white/20 p-1 rounded-full rotate-45 group-hover:rotate-90 transition-transform">
                      <ArrowUp className="h-4 w-4" />
                    </div>
                  </Button>
                </Link>
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
            </motion.div>

            {/* Right Side - Floating Cards & Socials */}
            <div className=" absolute top-10 bottom-0 right-0 w-1/4 opacity-80 lg:w-1/2 h-125 hidden lg:block">
              <motion.div
                initial={{ x: 20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/4 left-0 bg-white/10 backdrop-blur-sm border p-4 rounded-sm flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center">
                  <Flame className="h-6 w-6 text-orange animate-pulse" />
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
                className="absolute bottom-5 right-3 bg-white/10 backdrop-blur-sm p-4 rounded-sm flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-orange animate-pulse" />
                </div>
                <div>
                  <p className="text-2xl font-black">70bpm</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Heart Rate
                  </p>
                </div>
              </motion.div>

              {/* Vertical Socials */}
              <div className="absolute right-4 top-1/3 z-30 -translate-y-1/2 flex flex-col gap-6">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-11 group rounded-full border border-white/10 flex items-center justify-center text-foreground bg-white/20 backdrop-blur-sm hover:bg-orange hover:border-orange transition-all duration-300"
                    >
                      <Icon className="size-5 " />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
