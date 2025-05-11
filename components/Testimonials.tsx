"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    
    
    {
      name: 'Priya Sharma',
      role: 'CTO',
      company: 'TechNova Solutions',
      image: "/placeholder.svg?height=80&width=80",
      quote: 'SoftSell helped us recover over $50,000 from unused enterprise licenses. Their valuation was fair and the payment was processed within 24 hours. I highly recommend their service.',
      stars: 5
    },
    {
      name: "Neha Sharma",
      role: "Procurement Manager",
      company: "BYJU'S",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "We were sitting on a stack of unused Office 365 and AutoCAD licenses. With SoftSell, we quickly turned them into additional budget within 48 hours.",
      stars: 5,
    },
    {
      name: 'Raj Patel',
      role: 'IT Director',
      company: 'Globalex Industries',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'After downsizing our operations, we had several premium software licenses sitting unused. SoftSell made the resale process easy and secure, getting us a better return than we expected.',
      stars: 5
    }
    ,{
      name: "Amit Verma",
      role: "Head of IT",
      company: "Infosys",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "SoftSell helped us unlock value from idle software licenses across our teams. The onboarding was seamless, and their compliance-first approach made us confident from day one.",
      stars: 5,
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            Client Trust That Speaks Volumes
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-light max-w-2xl mx-auto">
            Stories of Success from India’s Most Trusted Brands.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-light">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic text-sm font-light leading-relaxed">
                “{testimonial.quote}”
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
