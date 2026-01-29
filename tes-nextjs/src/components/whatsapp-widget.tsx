"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import Image from 'next/image'

export function WhatsAppWidget() {
  const [showNotification, setShowNotification] = useState(false)
  const [showFloatButton, setShowFloatButton] = useState(false)
  const [notificationShown, setNotificationShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatButton(true)
        
        // Show notification after 3 seconds (only once)
        if (!notificationShown) {
          setTimeout(() => {
            setShowNotification(true)
            setNotificationShown(true)
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
              setShowNotification(false)
            }, 10000)
          }, 3000)
        }
      } else {
        setShowFloatButton(false)
        if (!notificationShown) {
          setShowNotification(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [notificationShown])

  const handleCloseNotification = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowNotification(false)
  }

  const whatsappUrl = "https://wa.me/255756336142?text=Hello%20Triple%20Lions%20Expeditions,%20I%20need%20assistance%20with%20planning%20my%20safari"

  return (
    <>
      {/* WhatsApp Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: 400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -3, scale: 1.02 }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseNotification}
              className="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/TES logo HD.png"
                  alt="Triple Lions Expeditions"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-white"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-white">Triple Lions Expeditions</h4>
                <p className="text-green-100 text-sm">Online now</p>
              </div>
            </div>

            {/* Message */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm mb-3">
                <p className="text-gray-800 text-sm">
                  👋 Hello! Do you need assistance planning your Tanzania safari adventure?
                </p>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
              
              <div className="bg-green-500 text-white rounded-lg px-4 py-2 text-center text-sm font-medium flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Click to chat on WhatsApp</span>
              </div>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {showFloatButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 4px 20px rgba(34, 197, 94, 0.4)",
                  "0 4px 30px rgba(34, 197, 94, 0.8), 0 0 0 10px rgba(34, 197, 94, 0.2)",
                  "0 4px 20px rgba(34, 197, 94, 0.4)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <MessageCircle className="h-7 w-7 text-white" />
              
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
