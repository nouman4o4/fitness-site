"use state"
import React, { SetStateAction } from "react"
import { motion } from "framer-motion"
import { Clock, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function SubmitModal({
  setIsSubmitted,
}: {
  setIsSubmitted: React.Dispatch<SetStateAction<boolean>>
}) {
  return (
    <main className="flex-1 pt-20 flex items-center justify-center min-h-[80vh] bg-background">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full mx-auto p-12 bg-surface-2 border border-orange/20 text-center space-y-8 shadow-[0_0_50px_var(--card-glow)]"
      >
        <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto">
          <PartyPopper className="h-10 w-10 text-orange" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-text-main">
            Application <span className="text-orange">Received!</span>
          </h2>
          <p className="text-text-soft leading-relaxed">
            Thank you for your interest in elite coaching. Alex personally
            reviews every application to ensure a perfect fit.
          </p>
        </div>
        <div className="pt-6 border-t border-border space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-orange">
            <Clock className="h-4 w-4" />
            Expect a response within 48 hours
          </div>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full border-border hover:bg-foreground hover:text-background rounded-none uppercase font-black tracking-widest"
          >
            Back to Form
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
