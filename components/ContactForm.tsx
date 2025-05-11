"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, ArrowRight, Building, Mail, User, Package, MessageSquare } from "lucide-react"

type FormData = {
  name: string
  email: string
  company: string
  licenseType: string
  quantity: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  company?: string
  licenseType?: string
}

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    quantity: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Windows Server",
    "Oracle Database",
    "SAP",
    "Salesforce",
    "Other",
  ]

  const quantityOptions = ["1-10", "11-50", "51-100", "101-500", "500+"]

  const validate = (currentStep: number) => {
    const newErrors: FormErrors = {}

    if (currentStep === 1) {
      if (!formData.licenseType) newErrors.licenseType = "Please select a license type"
    } else if (currentStep === 2) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid"
      }
      if (!formData.company.trim()) newErrors.company = "Company is required"
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      })
    }
  }

  const handleNext = () => {
    const newErrors = validate(step)
    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1)
    } else {
      setErrors(newErrors)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate(step)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          quantity: "",
          message: "",
        })
      }, 1500)
    } else {
      setErrors(newErrors)
    }
  }

  // Progress bar calculation
  const progress = Math.min(100, (step / 2) * 100)

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-300 dark:from-emerald-800 dark:to-teal-900 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-cyan-300 dark:from-purple-900 dark:to-cyan-900 rounded-full opacity-10 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div 
              className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Start Monetizing Unused Licenses
              </p>
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get Your Free License Valuation
            </motion.h2>
            
            <motion.p 
              className="mt-4 text-lg text-slate-700 dark:text-slate-300 font-light max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Complete this quick 2-step form and receive your valuation within 24 hours. 
              No commitment required.
            </motion.p>
          </div>

          {isSubmitted ? (
            <motion.div
              className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Success!</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Your request has been submitted successfully. Our team will analyze your licenses and contact you 
                within 24 hours with a detailed valuation report.
              </p>
              <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keep an eye on your inbox for an email from <span className="font-medium text-emerald-600 dark:text-emerald-400">team@softsell.com</span>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Progress tracker */}
              <div className="bg-gray-50 dark:bg-gray-900 px-8 py-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Step {step} of 2
                  </div>
                  <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {step === 1 ? "License Details" : "Contact Information"}
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Tell us about your licenses</h3>
                    
                    <div className="mb-6">
                      <label htmlFor="licenseType" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <Package className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>What type of licenses are you selling? *</span>
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.licenseType ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a license type</option>
                        {licenseTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.licenseType && (
                        <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="quantity" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <span>Approximate quantity of licenses</span>
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">Select a range</option>
                        {quantityOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="message" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <MessageSquare className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Additional details</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Version, expiration date, or any other details that may affect valuation"
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex items-center justify-center"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Your contact information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="name" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                          <User className="mr-2 h-4 w-4 text-emerald-500" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Raj Patel"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                          <Mail className="mr-2 h-4 w-4 text-emerald-500" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="raj.patel@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="company" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <Building className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Company Name *</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.company ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Globalex Industries"
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>

                    {/* Testimonial for social proof */}
                    <div className="mb-8 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                          RP
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                            "We were sitting on a stack of unused Office 365 and AutoCAD licenses. With SoftSell, we quickly turned them into additional budget within 48 hours."
                          </p>
                          <p className="text-gray-800 dark:text-white font-medium text-sm mt-1">
                            Raj Patel - IT Director at Globalex Industries.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex items-center justify-center ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Get Free Valuation
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
              
              {/* Trust signals */}
              <div className="px-8 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    100% Secure & Confidential
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Free, No-Obligation Quote
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    24-Hour Response Time
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}