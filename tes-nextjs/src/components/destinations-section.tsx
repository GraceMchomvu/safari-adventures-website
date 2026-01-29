"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Clock } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: "Serengeti National Park",
    description: "Witness the Great Migration and Africa's Big Five",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85",
    duration: "5-7 Days",
    highlight: "Great Migration"
  },
  {
    id: 2,
    name: "Mount Kilimanjaro",
    description: "Conquer Africa's highest peak - 5,895m above sea level",
    image: "https://images.unsplash.com/photo-1551524164-6cf3d3f2c7e5?w=1200&q=85",
    duration: "6-8 Days",
    highlight: "Roof of Africa"
  },
  {
    id: 3,
    name: "Zanzibar Beach",
    description: "Pristine beaches, spice tours, and rich cultural heritage",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
    duration: "4-6 Days",
    highlight: "Tropical Paradise"
  },
  {
    id: 4,
    name: "Ngorongoro Crater",
    description: "World's largest intact volcanic caldera with abundant wildlife",
    image: "https://images.unsplash.com/photo-1589553448964-7c5b8a4d1b4f?w=1200&q=85",
    duration: "3-5 Days",
    highlight: "Garden of Eden"
  },
  {
    id: 5,
    name: "Tarangire National Park",
    description: "Famous for elephant herds and majestic baobab trees",
    image: "https://images.unsplash.com/photo-1544966503-7cc4c8703f1c?w=1200&q=85",
    duration: "2-4 Days",
    highlight: "Elephant Haven"
  },
  {
    id: 6,
    name: "Lake Manyara National Park",
    description: "Tree-climbing lions and flamingo-filled alkaline lake",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=85",
    duration: "2-3 Days",
    highlight: "Tree Lions"
  }
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Tanzania
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most spectacular safari destinations and natural wonders in East Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {destination.highlight}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">Tanzania</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
