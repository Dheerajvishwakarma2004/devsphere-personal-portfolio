"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const aiResponses: Record<string, string> = {
  hello: "Hey there! 👋 Welcome to DevSphere. How can I help you today?",
  skills:
    "I'm proficient in React, Next.js, TypeScript, Node.js, and Tailwind CSS. I also have experience with database design and DevOps.",
  projects:
    "Check out my projects section! I've built AI chatbots, e-commerce platforms, SaaS applications, and data visualization dashboards.",
  experience:
    "I've been developing for about 5 years, specializing in full-stack web development with modern technologies.",
  contact:
    "You can reach me via the contact form, or through my social media links. I typically respond within 24 hours!",
  hire: "I'm always open to interesting opportunities! Feel free to reach out via the contact form with details about your project.",
  default: "That's a great question! Feel free to explore my portfolio or contact me for more information.",
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm the DevSphere AI assistant. Ask me about projects, skills, or anything else!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    return aiResponses.default
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-foreground shadow-lg hover:shadow-secondary/50 transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card border border-border rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-accent p-4 text-foreground">
              <h3 className="font-bold">DevSphere AI Assistant</h3>
              <p className="text-xs opacity-90">Ask me anything!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-secondary to-accent text-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-4 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-gradient-to-r from-secondary to-accent rounded-lg text-foreground hover:shadow-lg transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
