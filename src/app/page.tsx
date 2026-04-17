import Hero from "@/components/home-compnents/Hero"
import StatsStrip from "@/components/home-compnents/StatsStrip"
import AboutPreview from "@/components/home-compnents/AboutPreview"
import Programs from "@/components/home-compnents/Programs"
import Transformations from "@/components/home-compnents/Transformations"
import Testimonials from "@/components/home-compnents/Testimonials"
import Plans from "@/components/home-compnents/Plans"
import FAQs from "@/components/home-compnents/FAQs"
import FinalCta from "@/components/home-compnents/FinalCta"

export default function Home() {
  return (
    <div className="bg-card w-full overflow-x-hidden">
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <Programs />
      <Transformations />
      <Testimonials />
      <Plans />
      <FAQs />
      <FinalCta />
    </div>
  )
}
