"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, ChevronDown, ChevronUp, Clock, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Font consistency
const fontStyles = {
  heading: "font-sans font-bold",
  subHeading: "font-sans font-medium",
  body: "font-sans text-base",
  small: "font-sans text-sm",
  tiny: "font-sans text-xs"
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to SoftSell! How can I help you today?", timestamp: new Date() },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowSuggestions(true)
      setTimeout(() => {
        //@ts-ignore
        inputRef.current?.focus()
      }, 300)
    }
  }

  const scrollToBottom = () => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e = null) => {
    //@ts-ignore
    if (e) e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user", content: input, timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowSuggestions(false)

    let response
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("how") && lowerInput.includes("sell")) {
        response =
          "To sell your software licenses, simply fill out our contact form with details about your licenses. We'll provide a valuation within 24 hours and guide you through our simple 3-step process."
      } else if (lowerInput.includes("price") || lowerInput.includes("value") || lowerInput.includes("worth")) {
        response =
          "The value of your licenses depends on factors like software type, version, and market demand. Submit your details through our form for a free, no-obligation valuation within 24 hours."
      } else if (lowerInput.includes("time") || lowerInput.includes("long") || lowerInput.includes("process")) {
        response =
          "Our process is quick! After submitting your license details, you'll receive a valuation within 24 hours. If you accept our offer, payment is typically processed within 48 hours."
      } else if (lowerInput.includes("payment") || lowerInput.includes("paid")) {
        response =
          "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Once you accept our offer, you'll receive payment within 48 hours."
      } else if (lowerInput.includes("which") && lowerInput.includes("software") && lowerInput.includes("licenses")) {
        response = 
          "We purchase licenses for most major software vendors including Microsoft, Adobe, Oracle, SAP, VMware, Autodesk, and many others. Enterprise, volume, and perpetual licenses are particularly valuable."
      } else if (lowerInput.includes("minimum") && lowerInput.includes("license")) {
        response =
          "There's no strict minimum, but we typically buy packages of 5+ licenses. However, high-value individual licenses for specialized software are also of interest. Contact us with what you have!"
      } else if (lowerInput.includes("enterprise") && lowerInput.includes("licenses")) {
        response =
          "Yes! We specialize in enterprise licenses. These high-value assets are our core business. We handle volume licensing agreements, ELAs, and enterprise subscription transfers with complete legal compliance."
      } else if (lowerInput.includes("documentation") || lowerInput.includes("need")) {
        response =
          "You'll need proof of ownership like original purchase receipts, license certificates, or admin access to the license portal. We'll guide you through the specific requirements based on the software type."
      }  else {
      response = "Thanks for your question! Please visit our contact page or email support@softsell.com for specific queries."
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "system", content: response, timestamp: new Date() }])
      setIsLoading(false)
      setShowSuggestions(true)
    }, 1000)
  }

  const handleSuggestionClick = (question: any) => {
    setInput(question)
    setTimeout(() => {
      handleSubmit()
    }, 100)
  }

  const suggestedQuestions = [
    "How do I sell my licenses?",
    "How much are my licenses worth?",
    "How long does the process take?",
    "How will I get paid?",
    "Which software licenses can I sell?",
    "Is there a minimum license count?",
    "Do you handle enterprise licenses?",
    "What documentation do I need?",
  ]

  const formatTime = (date: any) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const renderSuggestions = () => {
    if (!showSuggestions && messages.length > 1) return null

    return (
      <div className="px-4 pb-3 pt-1">
        <div className="flex justify-between items-center mb-2">
          <p className={`${fontStyles.subHeading} text-gray-600 dark:text-gray-300`}>Suggested questions:</p>
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {showSuggestions ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className={`${fontStyles.small} bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 text-blue-600 dark:text-blue-300 px-3 py-2 rounded-lg hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all border border-blue-100 dark:border-gray-600 shadow-sm hover:shadow flex items-center justify-center text-center`}
              onClick={() => handleSuggestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-4 shadow-lg transition-colors"
          aria-label="Chat with us"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-blue-100 dark:border-gray-700"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h3 className={`${fontStyles.heading} text-lg`}>SoftSell Assistant</h3>
                  <p className={`${fontStyles.tiny} text-blue-100`}>We turn unused licenses into cash</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800" style={{ maxHeight: "350px" }}>
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex flex-col max-w-[80%] gap-1">
                    <div
                      className={`rounded-2xl p-3 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                          : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm border border-gray-100 dark:border-gray-700"
                      } ${fontStyles.body}`}
                    >
                      {message.content}
                    </div>
                    <div className={`flex items-center ${fontStyles.tiny} text-gray-500 ${message.role === "user" ? "justify-end mr-2" : "justify-start ml-2"}`}>
                      <Clock size={10} className="mr-1" />
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl p-4 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex space-x-2">
                      <div
                        className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700">
              <input
                ref={inputRef}
                type="text"
                className="w-full rounded-xl p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ask us anything!"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
              // @ts-ignore
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-3 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            {renderSuggestions()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
