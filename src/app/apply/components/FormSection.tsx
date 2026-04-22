"use client"
import { useState, FormEvent, SetStateAction, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  Loader2,
} from "lucide-react"
import { useSearchParams } from "next/navigation"

interface FormData {
  fullName: string
  email: string
  age: string
  program: string
  currentWeight: string
  targetWeight: string
  experience: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  age?: string
  program?: string
  currentWeight?: string
  targetWeight?: string
  experience?: string
}

export default function FormSection({
  setIsSubmitted,
}: {
  setIsSubmitted: React.Dispatch<SetStateAction<boolean>>
}) {
  const searchParams = useSearchParams()
  const preSelctedProgram = searchParams.get("program")
  const programValue = preSelctedProgram?.toLowerCase().split(" ").join("-")
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    age: "",
    program: programValue || "",
    currentWeight: "",
    targetWeight: "",
    experience: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: FormErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (parseInt(formData.age) < 13) {
      newErrors.age = "Must be at least 13 years old"
    }
    if (!formData.program) newErrors.program = "Please select a Program"
    if (!formData.currentWeight)
      newErrors.currentWeight = "Current weight is required"
    if (!formData.targetWeight)
      newErrors.targetWeight = "Target weight is required"
    if (!formData.experience)
      newErrors.experience = "Please select your experience level"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  useEffect(() => {
    if (preSelctedProgram) {
      const programValue = preSelctedProgram?.toLowerCase().split(" ").join("-")
      handleChange("program", programValue)
    }
    console.log("formData.program: ", formData.program)
  }, [preSelctedProgram])

  return (
    <section className="py-8 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Side: Info & Trust */}
          <div className="lg:col-span-1 order-2 md:order-1 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight italic text-text-main">
                Why <span className="text-orange">Apply?</span>
              </h2>
              <p className="text-text-soft leading-relaxed">
                Alex only takes on a limited number of clients each month to
                ensure every individual receives the elite attention and
                precision coaching required for guaranteed results.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Clock,
                  title: "48h Response Time",
                  desc: "We review every application personally and respond within 48 hours.",
                },
                {
                  icon: ShieldCheck,
                  title: "Strict Confidentiality",
                  desc: "Your data and transformation journey are kept 100% private.",
                },
                {
                  icon: Star,
                  title: "Limited Slots",
                  desc: "Currently accepting only 5 new clients for the upcoming month.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <item.icon className="h-6 w-6 text-orange" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold uppercase tracking-tight text-text-main">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-soft">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-surface-2 border border-border space-y-4">
              <div className="flex items-center gap-2 text-orange">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-widest">
                  Elite Standard
                </span>
              </div>
              <p className="text-sm text-text-soft italic">
                "I don't just sell programs; I build physiques. If you are
                accepted, expect the hardest but most rewarding work of your
                life."
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                — Sayem salam
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface-2 border border-border p-8 px-4 md:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Group 1: Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tight border-b border-border pb-4 text-text-main">
                    Personal <span className="text-orange">Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-xs font-black uppercase tracking-widest text-text-soft"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                        placeholder="John Doe"
                        className={`bg-background border-border h-12 rounded-none focus:ring-orange ${errors.fullName ? "border-destructive" : ""}`}
                      />
                      <AnimatePresence>
                        {errors.fullName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                          >
                            {errors.fullName}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-black uppercase tracking-widest text-text-soft"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        className={`bg-background border-border h-12 rounded-none focus:ring-orange ${errors.email ? "border-destructive" : ""}`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="age"
                        className="text-xs font-black uppercase tracking-widest text-text-soft"
                      >
                        Age
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleChange("age", e.target.value)}
                        placeholder="25"
                        className={`bg-background border-border h-12 rounded-none focus:ring-orange ${errors.age ? "border-destructive" : ""}`}
                      />
                      <AnimatePresence>
                        {errors.age && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                          >
                            {errors.age}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2 ">
                      <Label className="text-xs font-black uppercase tracking-widest text-text-soft">
                        program
                      </Label>
                      <Select
                        value={formData.program}
                        onValueChange={(val) => handleChange("program", val)}
                      >
                        <SelectTrigger
                          className={`bg-background border-border py-6 h-12 w-full rounded-none focus:ring-orange ${errors.program ? "border-destructive" : ""} ${preSelctedProgram && programValue === formData.program ? "text-orange" : ""} `}
                        >
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent className="bg-surface-3 border-border rounded-none hover:rounded-none">
                          <SelectItem value="fat-loss-coaching">
                            Fat Loss
                          </SelectItem>
                          <SelectItem value="1-on-1-elite-coaching">
                            1 on 1 Elite coaching
                          </SelectItem>
                          <SelectItem value="muscle-gain-program">
                            Muscle Gain Program
                          </SelectItem>
                          <SelectItem value="home-workout-plan">
                            Home Workout Plan
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <AnimatePresence>
                        {errors.program && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                          >
                            {errors.program}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Group 2: Physical Stats */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tight border-b border-border pb-4 text-text-main">
                    Physical <span className="text-orange">Stats</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="currentWeight"
                        className="text-xs font-black uppercase tracking-widest text-text-soft"
                      >
                        Current Weight (kg)
                      </Label>
                      <Input
                        id="currentWeight"
                        type="number"
                        value={formData.currentWeight}
                        onChange={(e) =>
                          handleChange("currentWeight", e.target.value)
                        }
                        placeholder="85"
                        className={`bg-background border-border h-12 rounded-none focus:ring-orange ${errors.currentWeight ? "border-destructive" : ""}`}
                      />
                      <AnimatePresence>
                        {errors.currentWeight && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                          >
                            {errors.currentWeight}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="targetWeight"
                        className="text-xs font-black uppercase tracking-widest text-text-soft"
                      >
                        Target Weight (kg)
                      </Label>
                      <Input
                        id="targetWeight"
                        type="number"
                        value={formData.targetWeight}
                        onChange={(e) =>
                          handleChange("targetWeight", e.target.value)
                        }
                        placeholder="75"
                        className={`bg-background border-border h-12 rounded-none focus:ring-orange ${errors.targetWeight ? "border-destructive" : ""}`}
                      />
                      <AnimatePresence>
                        {errors.targetWeight && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                          >
                            {errors.targetWeight}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Group 3: Experience */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tight border-b border-border pb-4 text-text-main">
                    Training <span className="text-orange">Experience</span>
                  </h3>
                  <div className="space-y-2">
                    <Label className="text-xs font-black uppercase tracking-widest text-text-soft">
                      How long have you been training?
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(val) => handleChange("experience", val)}
                    >
                      <SelectTrigger
                        className={`bg-background border-border w-full md:w-1/2 py-6 h-12 rounded-none focus:ring-orange ${errors.experience ? "border-destructive" : ""}`}
                      >
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface-3 border-border rounded-none">
                        <SelectItem value="beginner">
                          Beginner (0-6 months)
                        </SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate (6 months - 2 years)
                        </SelectItem>
                        <SelectItem value="advanced">
                          Advanced (2+ years)
                        </SelectItem>
                        <SelectItem value="elite">
                          Elite (Competitive level)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <AnimatePresence>
                      {errors.experience && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[10px] font-bold text-destructive uppercase tracking-widest"
                        >
                          {errors.experience}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Group 4: Message */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tight border-b border-border pb-4 text-text-main">
                    Additional <span className="text-orange">Notes</span>
                  </h3>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-black uppercase tracking-widest text-text-soft"
                    >
                      Tell us more about your challenges (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      placeholder="Share any injuries, dietary restrictions, or specific challenges you're facing..."
                      className="bg-background border-border rounded-none focus:ring-orange resize-none text-text-main placeholder:text-text-muted"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange hover:bg-foreground text-background font-black py-8 rounded-none uppercase tracking-[0.2em] text-lg transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_var(--card-glow)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting...{" "}
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Application <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-bold mt-6">
                    By submitting, you agree to our terms of service and privacy
                    policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
