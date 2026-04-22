"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Flame, Award, CheckCircle2 } from "lucide-react"
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"
import CommonHero from "@/components/CommonHero"

export default function AboutPage() {
  return (
    <main className="flex-1 pt-20">
      {/* 1. Hero / Introduction Section */}
      <CommonHero
        titleOne="Meet"
        titleTwo="Sayem salam"
        description="Elite Fitness Coach & Transformation Specialist. Dedicated to
              helping you break through plateaus and achieve the physique you've
              always dreamed of."
        imageSrc="/images/about-page/hero-background.jpg"
        link="/apply"
        buttonTitle="Apply for Coaching"
      />

      {/* 2. Story / Mission Section */}
      <section className="py-8 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter ">
                  My <span className="text-orange">Journey</span>
                </h2>
                <div className="w-20 h-1.5 bg-orange" />
              </div>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  My fitness journey didn't start in a high-end gym. It started
                  in a small garage with a pair of rusty dumbbells and a burning
                  desire to change my life. I struggled with consistency,
                  misinformation, and plateaus for years before I finally
                  cracked the code to sustainable transformation.
                </p>
                <p>
                  After transforming my own physique and mindset, I realized my
                  true calling: helping others avoid the same mistakes I made.
                  I've spent the last 5 years obsessively studying nutrition,
                  biomechanics, and psychology to provide the most effective
                  coaching possible.
                </p>
                <div className="p-8 bg-secondary border-l-4 border-orange italic text-white font-medium">
                  "My mission is simple: To empower individuals with the tools,
                  knowledge, and discipline required to achieve elite physical
                  excellence and mental fortitude."
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=80"
                alt="Sayem salam training in the gym"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange p-8 hidden md:block">
                <p className="text-black font-black text-4xl uppercase tracking-tighter">
                  5+ Years
                </p>
                <p className="text-black/80 font-bold uppercase tracking-widest text-xs">
                  Of Experience
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Credentials / Experience Section */}
      <section className="py-8 md:py-24 bg-card">
        <div className=" px-4 md:px-6">
          <div className="max-w-3xl mb-10 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Elite <span className="text-orange">Credentials</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Proven expertise and real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "ISSA Certified",
                desc: "International Sports Sciences Association Professional Coach.",
              },
              {
                icon: Users,
                title: "500+ Clients",
                desc: "Successfully coached individuals across 15+ countries.",
              },
              {
                icon: Trophy,
                title: "120+ Results",
                desc: "Documented life-changing physical transformations.",
              },
              {
                icon: Flame,
                title: "Impact",
                desc: "Over 50k+ followers across social platforms reached.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface border border-border p-8 space-y-6 group hover:border-orange/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-orange/10 flex items-center justify-center group-hover:bg-orange transition-colors duration-500">
                  <item.icon className="h-8 w-8 text-orange group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy / Training Approach */}
      <section className="py-8 md:py-24 bg-black">
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="images/about-page/phil-1.jpg"
                    className="w-full aspect-square object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="images/about-page/phil-2.jpg"
                    className="w-full aspect-3/4 object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="images/about-page/phil-3.jpg"
                    className="w-full aspect-3/4 object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="images/about-page/phil-4.jpg"
                    className="w-full aspect-square object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                  Coaching <span className="text-orange">Philosophy</span>
                </h2>
                <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
                  Science-based, results-driven, no-nonsense
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Evidence-Based Training",
                    desc: "No fad workouts. Every exercise is chosen based on biomechanics and proven hypertrophy principles.",
                  },
                  {
                    title: "Flexible Nutrition",
                    desc: "No restrictive diets. We focus on macronutrients and sustainability to ensure you stick to the plan.",
                  },
                  {
                    title: "Mental Fortitude",
                    desc: "Physical change starts in the mind. We build the discipline required to maintain results for life.",
                  },
                  {
                    title: "Extreme Accountability",
                    desc: "I am with you every step of the way. Weekly check-ins and 24/7 support ensure you never fail.",
                  },
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1">
                      <CheckCircle2 className="h-6 w-6 text-orange" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold uppercase tracking-tight group-hover:text-orange transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* socail impact */}
      <section className="py-8 md:py-24 bg-secondary-bg">
        <div className="px-4 md:px-6">
          <div className="mb-10 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Social <span className="text-orange">Impact</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Join the community and get daily motivation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                platform: "Instagram",
                handle: "@sayem_salam.fit",
                followers: "61.2K+",
                accountLink: "https://www.instagram.com/sayem_salam.fit",
                image:
                  "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=500&q=80",
                icon: BsInstagram,
                color: "text-[#E1306C]",
              },
              {
                platform: "TikTok",
                handle: "@sayem.salam.coach",
                followers: "178K+",
                accountLink: "https://www.tiktok.com/@sayem.salam.coach",
                image:
                  "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=500&q=80",
                icon: BsTiktok,
                color: "text-white",
              },
              {
                platform: "Facebook",
                handle: "Sayem Salam Fitness",
                followers: "39.8K+",
                image:
                  "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=500&q=80",
                accountLink: "https://web.facebook.com/sayemsalamfitness",
                icon: BsFacebook,
                color: "text-[#1877F2]",
              },
            ].map((social, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border p-8 flex flex-col items-center text-center space-y-6 group hover:border-orange/50 transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src={social.image}
                    alt={social.platform}
                    className="w-24 h-24 rounded-full object-cover border-2 border-orange/20 group-hover:border-orange transition-colors duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 p-2 rounded-full">
                    <social.icon className={`h-4 w-4 ${social.color}`} />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {social.platform}
                  </h3>
                  <p className="text-orange font-bold text-sm">
                    {social.handle}
                  </p>
                </div>

                <div className="py-2 px-6 bg-white/5 rounded-full border border-white/10">
                  <p className="text-2xl font-black">{social.followers}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    Followers
                  </p>
                </div>

                <Link
                  href={social.accountLink}
                  target="_blank"
                  className="w-full cursor-pointer"
                >
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer border-white/10 hover:border-orange hover:bg-orange hover:text-black uppercase font-bold tracking-widest text-xs py-6 rounded-none transition-all duration-300"
                  >
                    Visit Account
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final Call-To-Action */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            width={600}
            height={400}
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
                Ready to <span className="text-orange">Level Up?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
                Your transformation starts with a single decision. Apply now and
                let's build the best version of you.
              </p>
            </div>

            <div className="flex justify-center pt-6">
              <Link href={"/apply"}>
                <Button className="bg-orange hover:bg-white text-black font-black py-8 px-16 rounded-none uppercase tracking-[0.2em] text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(242,125,38,0.4)]">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
