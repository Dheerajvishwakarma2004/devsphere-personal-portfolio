"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

const timelineEvents = [
  {
    year: "2021",
    title: "Started Coding Journey",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built first personal projects and explored the fundamentals.",
  },
  {
    year: "2022",
    title: "Discovered React",
    description:
      "Deep-dived into React ecosystem, built interactive frontends, and started participating in college hackathons.",
  },
  {
    year: "2023",
    title: "Expanded to Full-Stack",
    description:
      "Learned backend development with Node.js and databases. Started building complete applications from scratch.",
  },
  {
    year: "2024",
    title: "Explored IoT & AI/ML",
    description:
      "Ventured into IoT projects with Arduino, explored machine learning with Python, and mobile app development with React Native.",
  },
  {
    year: "2025",
    title: "Building the Future",
    description:
      "Currently pursuing studies while building innovative solutions. Focused on creating impactful projects and staying at the forefront of web technologies.",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From curious learner to passionate developer, here's my journey of continuous learning and innovation.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 p-6 md:p-8 bg-card border border-border rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm Dheeraj Vishwakarma, a passionate developer currently pursuing my studies while building innovative
            applications. My journey into tech started with curiosity about how websites work, and has evolved into a
            passion for creating elegant solutions to real-world problems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My primary focus is web development with expertise in React and Next.js. However, I'm not one to stay in a
            single domain—I've explored IoT systems with Arduino, experimented with AI/ML using Python, and developed
            mobile apps with React Native. This diverse background allows me to approach problems from multiple
            perspectives and bring innovative ideas to life.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me participating in hackathons, contributing to personal projects, or
            learning the latest technologies. I believe in continuous growth and love collaborating with others to build
            something meaningful.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {timelineEvents.map((event, index) => (
            <motion.div key={event.year} variants={itemVariants} className="flex gap-6">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  className="w-4 h-4 bg-secondary rounded-full border-4 border-background"
                  whileHover={{ scale: 1.5 }}
                />
                {index !== timelineEvents.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-secondary to-accent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1 pb-8">
                <span className="text-sm font-bold text-secondary">{event.year}</span>
                <h4 className="text-xl font-bold mt-1 mb-2">{event.title}</h4>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-secondary to-accent rounded-lg font-semibold text-foreground hover:shadow-lg hover:shadow-secondary/50 transition-all flex items-center gap-2 group"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
