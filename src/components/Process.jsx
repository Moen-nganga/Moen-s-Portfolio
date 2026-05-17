import { motion } from 'framer-motion'
import { process } from '../data'
import { CheckCircle } from 'lucide-react'

export default function Process() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>

  return (
    <section id="process" className="py-24 px-6">
      <Div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Div className="flex items-center gap-3 mb-4">
            <Div className="h-px w-8 bg-primary" />
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">How I Work</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Process</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A clear, structured approach to every project — so you always know what to expect.
          </p>
        </motion.div>

        {/* Steps */}
        <Div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200 relative"
            >
              {/* Step Number */}
              <Div className="flex items-center justify-between">
                <Div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Span className="text-primary font-bold text-sm">0{item.step}</Span>
                </Div>
                <Span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                  {item.duration}
                </Span>
              </Div>

              {/* Title & Description */}
              <Div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </Div>

              {/* Activities */}
              <Div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Activities</p>
                <Div className="flex flex-col gap-1.5">
                  {item.activities.map((activity, j) => (
                    <Div key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <Div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {activity}
                    </Div>
                  ))}
                </Div>
              </Div>

              {/* Deliverables */}
              <Div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Deliverables</p>
                <Div className="flex flex-col gap-1.5">
                  {item.deliverables.map((deliverable, j) => (
                    <Div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={12} className="text-primary shrink-0" />
                      {deliverable}
                    </Div>
                  ))}
                </Div>
              </Div>
            </motion.div>
          ))}
        </Div>

      </Div>
    </section>
  )
}