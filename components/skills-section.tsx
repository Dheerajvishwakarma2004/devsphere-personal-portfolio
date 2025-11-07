"use client"
import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVuedotjs,
  SiCplusplus,
  SiSvelte,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiFlutter,
  SiArduino,
  SiRaspberrypi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiJavascript,
} from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi";

const techStack = {
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Svelte", icon: SiSvelte },
    { name: "HTML5", icon: SiHtml5 },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
  ],
  "Mobile & IoT": [
    { name: "React Native", icon: SiReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "Arduino", icon: SiArduino },
    { name: "Raspberry Pi", icon: SiRaspberrypi },
  ],
  "AI/ML & Data": [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "OpenAI", icon: SiOpenai },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "VS Code", icon: BiLogoVisualStudio },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with across web development, mobile apps, IoT, AI/ML, and DevOps. Feel free to remove
            any that don't apply to you.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(techStack).map((category, categoryIndex) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-secondary">{category[0]}</h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category[1].map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group"
                    >
                      <div className="relative h-24 bg-background border border-border rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
                        <IconComponent className="text-4xl group-hover:scale-110 transition-transform duration-300 text-secondary" />
                        <span className="text-xs font-semibold text-center text-foreground/80 group-hover:text-secondary transition-colors duration-300">
                          {tech.name}
                        </span>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary/0 via-secondary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
