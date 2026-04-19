"use client"
import { Suspense, useState } from "react"
import { motion } from "framer-motion"

import SubmitModal from "./components/SubmitModal"
import Image from "next/image"
import FormSection from "./components/FormSection"
import FormSectionSkeleton from "./components/FormSectionSkeleton"
import CommonHero from "@/components/CommonHero"

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return <SubmitModal setIsSubmitted={setIsSubmitted} />
  }

  return (
    <main className="flex-1 pt-20">
      {/* 1. Hero Section */}
      <CommonHero
        titleOne="Apply for"
        titleTwo="Coaching"
        description="Serious inquiries only. If you're ready to commit 100% to your
              transformation, fill out the form below to start your journey."
        imageSrc="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=2070"
      />

      {/* 2. Application Form Section */}

      <Suspense fallback={<FormSectionSkeleton />}>
        <FormSection setIsSubmitted={setIsSubmitted} />
      </Suspense>
    </main>
  )
}
