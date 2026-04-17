"use client"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const message = "Hi, I'm interested in your coaching programs."
  const phoneNumber = "1234567890"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const faqs = [
    {
      question: "What is included in the coaching plans?",
      answer:
        "Every plan includes a fully customized workout routine and a science-based nutrition guide tailored to your specific body type and fitness goals.",
    },
    {
      question: "How do I make payments?",
      answer:
        "We accept all major credit/debit cards, bank transfers, and popular digital wallets in Pakistan. Payments are processed securely via our encrypted gateway.",
    },
    {
      question: "Can I get a custom diet plan if I'm vegetarian?",
      answer:
        "Absolutely! Our nutrition guides are 100% personalized. Whether you are vegetarian, vegan, or have specific allergies, we build the plan around your lifestyle.",
    },
    {
      question: "What is the difference between online and 1-on-1 coaching?",
      answer:
        "Online coaching provides digital plans and weekly check-ins, while 1-on-1 coaching includes real-time personal sessions and daily direct access for form correction.",
    },
    {
      question: "How soon can I expect to see results?",
      answer:
        "Most clients see noticeable changes in energy and strength within 2 weeks, with significant physical transformations appearing between 8 to 12 weeks of consistency.",
    },
    {
      question: "Do I need a gym membership for the home workout plan?",
      answer:
        "No! Our home plans are designed to be effective with minimal equipment like dumbbells or resistance bands, or even just your own bodyweight.",
    },
  ]
  return (
    <div>
      <section className="py-8 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Common <span className="text-orange">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Everything you need to know about our coaching process and how
                we help you achieve elite results.
              </p>
              <div className="pt-6">
                <div className="p-8 bg-surface border border-border space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Can't find the answer you're looking for? Reach out to Alex
                    directly for a personal consultation.
                  </p>
                  <Link
                    href={whatsappUrl}
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    target="_blank"
                  >
                    <Button className="bg-orange hover:bg-white text-black font-bold uppercase tracking-widest rounded-none w-full py-6">
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-lg font-bold transition-colors ${openFaq === i ? "text-orange" : "text-white group-hover:text-orange"}`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    >
                      {openFaq === i ? (
                        <Minus className="h-5 w-5 text-orange" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500 group-hover:text-orange" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-gray-400 leading-relaxed max-w-xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
