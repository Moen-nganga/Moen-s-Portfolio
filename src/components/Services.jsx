import { motion } from 'framer-motion'
import { services } from '../data'
import { CheckCircle, Clock, ArrowRight } from 'lucide-react'

export default function Services() {
  const Div = ({ children, className }) => <div className={className}>{children}</div>
  const Span = ({ children, className }) => <span className={className}>{children}</span>
  const AnchorLink = ({ href, children, className }) => (
    <a href={href} className={className}>{children}</a>
  )

  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
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
            <Span className="text-primary text-sm font-medium uppercase tracking-wider">What I Offer</Span>
          </Div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Here's what I can help you build. Each service is tailored to your needs and delivered with care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <Div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-5 hover:border-primary/50 transition-colors duration-200"
            >
            {/* Image */}
  <Div className="w-full h-48 overflow-hidden">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
    />
  </Div>
              {/* Title & Delivery */}
              <Div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <Div className="flex items-center gap-2 text-xs text-primary">
                  <Clock size={12} />
                  {service.delivery}
                </Div>
              </Div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Best For */}
              <Div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Best For</p>
                <Div className="flex flex-wrap gap-2">
                  {service.bestFor.map((item, j) => (
                    <Span
                      key={j}
                      className="bg-white/10 text-gray-300 text-xs px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </Span>
                  ))}
                </Div>
              </Div>

              {/* Price & CTA */}
              <Div className="flex items-center justify-between pt-4 border-t border-white/10">
                <Div>
                  <p className="text-xs text-gray-500">Starting from</p>
                  <p className="text-white font-bold">{service.startingPrice}</p>
                </Div>
                <AnchorLink
                  href="#contact"
                  className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight size={12} />
                </AnchorLink>
              </Div>
            </motion.div>
          ))}
        </Div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <Div>
            <h3 className="text-xl font-bold mb-2">Need something custom?</h3>
            <p className="text-gray-400 text-sm">
              Have a unique project in mind? Let's talk and figure out the best approach together.
            </p>
          </Div>
          <AnchorLink
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Let's Talk
            <ArrowRight size={16} />
          </AnchorLink>
        </motion.div>

      </Div>
    </section>
  )
}