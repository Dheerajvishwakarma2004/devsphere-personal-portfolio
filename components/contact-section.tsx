"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Dheerajvishwakarma2004", color: "hover:text-white" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dheeraj-vishwakarma-907264288",
    color: "hover:text-blue-500",
  },
  { icon: Mail, label: "Email", href: "mailto:dheerajvishwakarma426@gmail.com", color: "hover:text-red-500" },
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
    transition: { duration: 0.5 },
  },
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project idea, hackathon collaboration, or just want to discuss web development? I'd love to hear from
            you! Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  rows={5}
                  placeholder="Your message..."
                  required
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-accent rounded-lg font-semibold text-foreground hover:shadow-lg hover:shadow-secondary/50 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center text-sm"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Connect with Me</h3>
              <div className="space-y-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center group-hover:border-secondary transition-colors">
                      <social.icon className={`w-5 h-5 ${social.color} transition-colors`} />
                    </div>
                    <div>
                      <p className="font-semibold">{social.label}</p>
                      <p className="text-sm text-muted-foreground">Let's connect</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <motion.div variants={itemVariants} className="p-6 bg-card border border-border rounded-lg mt-8">
              <p className="text-sm text-muted-foreground mb-2">Response Time</p>
              <p className="font-semibold">Usually within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
