"use client"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export default function WhatsAppButton({
  phoneNumber = "1234567890",
  message = "Hi, I'm interested in your coaching programs.",
}: WhatsAppButtonProps) {
  const [showBubble, setShowBubble] = useState(false)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 3000) // Show bubble after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="pointer-events-auto relative bg-surface-3 border border-border p-4 shadow-2xl rounded-2xl max-w-50 mb-2"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 text-text-muted hover:text-orange transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-xs font-medium text-text-main leading-relaxed">
              Need help? <br />
              <span className="text-orange font-bold uppercase tracking-widest text-[10px]">
                Chat now with Alex
              </span>
            </p>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-surface-3 border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto relative group"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping group-hover:animate-none" />

        {/* Tooltip on Hover */}
        <span className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 hidden md:block">
          Chat on WhatsApp
        </span>

        <div className="relative h-14 w-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]">
          <MessageCircle className="h-7 w-7 text-white fill-white" />
        </div>
      </motion.a>
    </div>
  )
}
