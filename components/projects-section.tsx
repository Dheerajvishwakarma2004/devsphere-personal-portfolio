"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "smartBreeze-automatic AC controller",
    description:
      "It automates air conditioning through temperature, motion, and voice/app commands, offering smart, energy-efficient comfort.",
    tags: ["Arduino UNO", "ESP8266", "Flutter"],
    github: "https://github.com/Dheerajvishwakarma2004/smartBreeze-automatic_AC_controller",
    live: "https://github.com/Dheerajvishwakarma2004/smartBreeze-automatic_AC_controller/releases/tag/v1.0.0",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description:
      "An intelligent code review tool powered by machine learning APIs with a sleek React frontend.",
    tags: ["React", "Hugging Face", "monaco-editor", "Tailwind"],
    github: "https://github.com/Dheerajvishwakarma2004/ai-code-review",
    live: "https://ai-code-review-frontend.vercel.app/",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "MovieDB - movie recommendation system",
    description:
      "Web application for tracking movies with features like ratings, reviews, and personalized recommendations.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Dheerajvishwakarma2004/movie-recommendation",
    live: "https://moviedb-movie-recommendation.vercel.app/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "StegoScan",
    description: "LSB steganography detector with visual output and confidence scores.",
    tags: ["Python", "Streamlit", "Steganography"],
    github: "https://github.com/Dheerajvishwakarma2004/Stego_scan",
    live: "https://stegoscan.streamlit.app/",
    gradient: "from-green-500 to-cyan-500",
  },
  {
    id: 5,
    title: "ipynb to pdf",
  description: "Streamlit web app that converts Jupyter (.ipynb) notebooks into polished PDF documents — no LaTeX required.",
    tags: ["Python", "Streamlit", "nbconvert"],
    github: "https://github.com/Dheerajvishwakarma2004/ipynb_to_pdf",
    live: "https://ipynbtopdf.streamlit.app/",
    gradient: "from-green-500 to-cyan-500",
  },
  {
    id: 6,
    title: "StackQuest",
    description:
      "Gamified platform teaching Bitcoin, Stacks, and Clarity with interactive lessons, coding challenges, and an AI mentor.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    github: "https://github.com/Dheerajvishwakarma2004/StacksQuest",
    live: "https://stacks-quest.vercel.app/",
    gradient: "from-yellow-500 to-orange-500",
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, IoT, AI/ML, and mobile applications built through
            hackathons and personal experimentation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/50 transition-colors"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-medium text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 items-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
