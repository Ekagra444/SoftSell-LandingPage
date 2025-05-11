"use client"

import { motion } from "framer-motion"
import { Shield, Clock, DollarSign, Award } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      title: "Best Market Value",
      description: "Our proprietary algorithm ensures you get the highest possible value for your licenses.",
      icon: <DollarSign className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Fast & Secure Process",
      description: "Complete the entire process in minutes with our secure, encrypted platform.",
      icon: <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Quick Payment",
      description: "Receive payment within 48 hours of accepting our offer.",
      icon: <Clock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Compliance Guaranteed",
      description: "Our legal team ensures all transfers comply with software licensing regulations.",
      icon: <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-light max-w-2xl mx-auto">
            SoftSell offers unmatched benefits when it comes to selling your software licenses.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-800/40">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
