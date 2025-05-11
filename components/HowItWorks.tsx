"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description: "Submit your software license details through our secure portal.",
      icon: <Upload className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Get Valuation",
      description: "Receive an instant market-based valuation for your licenses.",
      icon: <DollarSign className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment within 48 hours.",
      icon: <CreditCard className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
            How It Works
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-light max-w-2xl mx-auto">
            Our streamlined process makes selling software licenses quick and hassle-free.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-800/40 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-light">
                {step.description}
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-base sm:text-lg font-semibold shadow-md">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
