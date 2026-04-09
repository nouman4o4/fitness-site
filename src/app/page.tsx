import Hero from "@/components/home-compnents/Hero"
import StatsStrip from "@/components/home-compnents/StatsStrip"
import AboutPreview from "@/components/home-compnents/AboutPreview"
import Programs from "@/components/home-compnents/Programs"
import Transformations from "@/components/home-compnents/Transformations"

export default function Home() {
  return (
    <div className="bg-card min-h-[200vh]">
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <Programs />
      <Transformations />
    </div>
  )
}
