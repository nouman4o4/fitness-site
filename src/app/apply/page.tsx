"use client"
import { Suspense, useState } from "react"
import { motion } from "framer-motion"

import SubmitModal from "./components/SubmitModal"
import Image from "next/image"
import FormSection from "./components/FormSection"
import FormSectionSkeleton from "./components/FormSectionSkeleton"

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return <SubmitModal setIsSubmitted={setIsSubmitted} />
  }

  return (
    <main className="flex-1 pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            width={600}
            height={400}
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=2070"
            alt="Apply for Coaching"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-text-main">
              Apply for <span className="text-orange">Coaching</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-soft font-medium leading-relaxed max-w-2xl mx-auto">
              Serious inquiries only. If you're ready to commit 100% to your
              transformation, fill out the form below to start your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Application Form Section */}

      <Suspense fallback={<FormSectionSkeleton />}>
        <FormSection setIsSubmitted={setIsSubmitted} />
      </Suspense>
    </main>
  )
}
