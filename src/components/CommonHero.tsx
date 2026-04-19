import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

interface HeroProps {
  titleOne: string
  titleTwo: string
  description: string
  link?: string
  imageSrc: string
  buttonTitle?: string
}

export default function CommonHero({
  titleOne,
  titleTwo,
  description,
  link,
  imageSrc,
  buttonTitle,
}: HeroProps) {
  return (
    <div>
      <section className="relative md:h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            height={400}
            width={800}
            src={imageSrc}
            alt="Coach Alex Saqib"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="container py-10 md:py-0 mb-4 mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              {titleOne} <span className="text-orange">{titleTwo}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
              {description}
            </p>
            {link ? (
              <div className="pt-4 text-center">
                <Link href={link}>
                  <Button className="bg-orange cursor-pointer hover:bg-white text-black font-black py-6 px-6 md:py-8 md:px-12 rounded-none uppercase tracking-[0.2em] text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,125,38,0.3)]">
                    {buttonTitle}
                  </Button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
