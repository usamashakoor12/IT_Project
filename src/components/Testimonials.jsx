import { motion } from "framer-motion"

const quotes = [
  { name: "Amna", role: "Frontend Dev", text: "Clean, fast, and beautiful animations. Loved it!" },
  { name: "Bilal", role: "PM", text: "Setup took minutes. The responsive design is spot-on." },
  { name: "Zara", role: "Designer", text: "Great base to customize any video-focused site." },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-semibold text-center mb-12"
        >
          What people say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <blockquote className="text-sm text-neutral-300">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">{q.name} <span className="text-neutral-400">— {q.role}</span></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
