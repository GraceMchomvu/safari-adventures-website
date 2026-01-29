"use client"

import { motion } from 'framer-motion'
import { Route, Hotel, Package, Users, Headphones, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Route,
    title: "Curated Itineraries",
    description: "Expertly crafted safari plans tailored to your preferences and adventure style"
  },
  {
    icon: Hotel,
    title: "Premium Accommodations",
    description: "Handpicked lodges and tented camps offering comfort in the wilderness"
  },
  {
    icon: Package,
    title: "All-Inclusive Packages",
    description: "No hidden costs - park fees, lodging, meals, and activities all covered"
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Authentic cultural immersion with experienced Tanzanian safari guides"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your safari adventure"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Travel with peace of mind with comprehensive travel insurance"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Triple Lions Expeditions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide exceptional safari experiences with attention to every detail of your Tanzania adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 group-hover:scale-125" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
