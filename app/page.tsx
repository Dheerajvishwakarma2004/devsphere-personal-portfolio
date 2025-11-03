"use client"
import { motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ParticlesBackground } from "@/components/particles-background"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { AIChatbot } from "@/components/ai-chatbot"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useState } from "react"

const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen w-full">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
            >
              DevSphere
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors text-sm font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                className="md:hidden p-2 hover:bg-secondary/10 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-10 px-4">
          {/* Background Gradient */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center z-10"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-secondary text-sm font-medium tracking-widest uppercase">Welcome to DevSphere</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent"
            >
              The Living Portfolio
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Discover innovative projects, cutting-edge skills, and a developer journey crafted with passion.
              Interactive, animated, and designed for the future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-secondary to-accent rounded-lg font-semibold text-foreground hover:shadow-lg hover:shadow-secondary/50 transition-all flex items-center gap-2 group"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-2 bg-secondary rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* All Sections */}
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
            <p>© 2025 DevSphere. Crafted with passion using Next.js, Framer Motion, and Tailwind CSS.</p>
          </div>
        </footer>
      </div>

      {/* AI Chatbot & Scroll to Top */}
      <AIChatbot />
      <ScrollToTop />
    </>
  )
}
