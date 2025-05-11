"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const features = [
    "Instant Delivery",
    "Genuine Licenses",
    "Volume Discounts",
    "Free Technical Support",
    "Easy Deployment",
    "Regular Updates"
  ]

  const popularSoftware = [
    {
      name: "Adobe Creative Cloud",
      category: "Design & Creativity",
      price: "$52.99/mo",
      icon: "🎨"
    },
    {
      name: "Microsoft Office 365",
      category: "Productivity",
      price: "$8.25/mo",
      icon: "📊"
    },
    {
      name: "Windows 11 Pro",
      category: "Operating System",
      price: "$199.99",
      icon: "🪟"
    },
    {
      name: "Visual Studio 2025",
      category: "Development",
      price: "$45.99/mo",
      icon: "💻"
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-emerald-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-850 dark:to-purple-900 py-28 md:py-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-rose-300 dark:from-amber-600 dark:to-rose-700 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200 to-teal-300 dark:from-emerald-800 dark:to-teal-700 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-200 to-teal-300 dark:from-cyan-800 dark:to-teal-900 rounded-full opacity-10 blur-2xl"></div>

      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 left-12 w-6 h-6 rounded-full bg-emerald-500"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-rose-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-amber-500"></div>
        <div className="absolute bottom-24 right-36 w-5 h-5 rounded-full bg-teal-500"></div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <motion.div
            className="md:w-1/2 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-6">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Premium Software Marketplace
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 leading-tight tracking-tight">
              Genuine Software <span className="text-rose-500 dark:text-rose-400">Licenses</span>
            </h1>
            
            <p className="mt-6 text-xl text-slate-700 dark:text-slate-300 max-w-lg font-light leading-relaxed">
              SoftMarket provides businesses with genuine software licenses from Adobe, Microsoft, and hundreds of other top publishers at competitive prices.
            </p>

            {/* Social Proof */}
            <div className="mt-8 mb-10 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-800 border-2 border-white dark:border-gray-900`}></div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                Trusted by <span className="font-semibold">10,000+</span> businesses worldwide
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="#shop"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex items-center justify-center"
              >
                <span>Browse Software</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="#volume-pricing"
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-slate-800 dark:text-white font-medium rounded-full shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                Volume Pricing
              </Link>
            </div>

            {/* Animated Feature List */}
            <div className="mt-12 flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/80 p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Illustration Section */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="w-full h-[65vh] max-h-[32rem] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 dark:from-emerald-600 dark:via-teal-700 dark:to-cyan-800 rounded-3xl shadow-2xl overflow-hidden">
              
              
                <div className="absolute inset-0">
                  
                  <div className="py-20 px-8">
                    
                    
                    <div className="grid grid-cols-2 gap-6">
                      {popularSoftware.map((software, index) => (
                        <div key={index} className="h-36 bg-white/20 rounded-xl flex flex-col justify-between p-4 hover:bg-white/30 transition duration-300">
                          <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-lg bg-white/30 flex items-center justify-center text-2xl">
                              {software.icon}
                            </div>
                            <div className="py-1 px-3 bg-white/20 rounded-full text-black text-xs">
                              {software.price}
                            </div>
                          </div>
                          <div>
                            <div className="text-white font-medium">{software.name}</div>
                            <div className="text-white/70 text-sm">{software.category}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform rotate-12 flex items-center justify-center p-4">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-indigo-600 dark:to-purple-700 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                  MS
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 rounded-full flex items-center justify-center text-white font-black shadow-xl transform rotate-12">
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path 
                      id="circlePath" 
                      d="M50,15 a35,35 0 1,1 0,70 a35,35 0 1,1 0,-70" 
                      fill="none" 
                    />
                    <text fill="white" fontSize="12px" fontWeight="bold" letterSpacing="2px">
                      <textPath href="#circlePath" startOffset="0%">
                        SAVE 30% · SAVE 30% · 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-2xl whitespace-nowrap font-bold">30%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}