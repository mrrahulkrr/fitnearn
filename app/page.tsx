
import { Hero } from "@/components/hero"
import { KeyFeatures } from "@/components/key-features"
import { CoachBenefits } from "@/components/coach-benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonial"
import { BecomeCoach } from "@/components/become-coach"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CoachCategories } from "@/components/coach-categories"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CoachCategories />
      <CoachBenefits />
      <KeyFeatures />
      <Testimonials />
      <HowItWorks />
      <BecomeCoach />
      <Footer />
    </main>
  )
}

