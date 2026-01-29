"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Mailbox, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    type: "email",
    label: "Email",
    value: "lkuresoi@gmail.com",
    copy: "lkuresoi@gmail.com"
  },
  {
    icon: Phone,
    type: "phone", 
    label: "Phone",
    value: "+255 756 336 142",
    copy: "+255756336142"
  },
  {
    icon: MapPin,
    type: "office",
    label: "Office",
    value: "Mkabala na Chuo Cha Bishop Durning, Ilboru, Arusha, Tanzania",
    copy: "Mkabala na Chuo Cha Bishop Durning, Ilboru, Arusha, Tanzania"
  },
  {
    icon: Mailbox,
    type: "pobox",
    label: "P.O. Box",
    value: "1187, Arusha 23227",
    copy: "1187, Arusha 23227"
  }
]

export function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCopy = async (copyText: string, type: string) => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopiedItem(type)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Tanzania Adventure
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to experience the magic of Tanzania? Get in touch with our safari experts and let&apos;s plan your perfect African expedition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => handleCopy(item.copy, item.type)}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                          <p className="text-white/90 mb-2 leading-relaxed">{item.value}</p>
                          <div className="flex items-center space-x-2 text-white/70 text-sm">
                            {copiedItem === item.type ? (
                              <>
                                <Check className="h-4 w-4 text-green-300" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                <span>Click to copy</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/90 border-white/20 focus:bg-white"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/90 border-white/20 focus:bg-white"
                    />
                  </div>
                  
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/90 border-white/20 focus:bg-white"
                  />
                  
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="flex h-12 w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <option value="">Select Destination</option>
                    <option value="Serengeti National Park">Serengeti National Park</option>
                    <option value="Mount Kilimanjaro">Mount Kilimanjaro</option>
                    <option value="Zanzibar Beach">Zanzibar Beach</option>
                    <option value="Ngorongoro Crater">Ngorongoro Crater</option>
                    <option value="Tarangire National Park">Tarangire National Park</option>
                    <option value="Lake Manyara National Park">Lake Manyara National Park</option>
                    <option value="Custom Safari Package">Custom Safari Package</option>
                    <option value="Other">Other</option>
                  </select>
                  
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your dream trip..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-white/90 border-white/20 focus:bg-white"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4"
                    size="lg"
                  >
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
