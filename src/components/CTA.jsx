import { motion } from "framer-motion"

export function CTA() {
  return (
    <section id="get-started" className="py-24">
      <div className="container">
        <div className="rounded-3xl border border-brand/30 bg-brand/10 p-8 md:p-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold"
          >
            Ready to launch your site?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-neutral-200"
          >
            Start from this template and customize as you like.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center"
          >
            <a href="#contact" className="px-6 py-3 rounded-2xl bg-brand text-neutral-900 font-medium shadow ring-1 ring-white/10">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
