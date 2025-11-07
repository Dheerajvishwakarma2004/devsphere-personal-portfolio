"use client"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const skillsData = [
  { name: "React", proficiency: 95 },
  { name: "Next.js", proficiency: 92 },
  { name: "TypeScript", proficiency: 88 },
  { name: "Tailwind CSS", proficiency: 90 },
  { name: "Node.js", proficiency: 85 },
  { name: "Python (AI/ML)", proficiency: 80 },
  { name: "React Native", proficiency: 78 },
  { name: "IoT & Arduino", proficiency: 75 },
]

const colors = ["#00d9ff", "#a78bfa", "#f472b6", "#06b6d4", "#7c3aed", "#fbbf24", "#f87171", "#34d399"]

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
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
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My expertise spans web development, mobile apps, IoT systems, and AI/ML integration with proficiency in
            modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skillsData.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-secondary">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                <XAxis dataKey="name" stroke="currentColor" opacity={0.5} style={{ fontSize: "12px" }} />
                <YAxis stroke="currentColor" opacity={0.5} style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => [`${value}%`, "Proficiency"]}
                />
                <Bar dataKey="proficiency" fill="#00d9ff" radius={[8, 8, 0, 0]}>
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
