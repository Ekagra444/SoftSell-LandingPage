import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import ChatWidget from "@/components/ChatWidget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SoftSell - The Easiest Way to Sell Your Software Licenses",
  description:
    "SoftSell helps businesses sell their unused software licenses quickly and at the best price. Get an instant valuation today.",
  keywords: "software resale, license resale, sell software licenses, software marketplace",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  )
}
