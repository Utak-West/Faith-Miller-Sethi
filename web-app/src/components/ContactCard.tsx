'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, MapPin, Calendar, ExternalLink, Download } from 'lucide-react'

export default function ContactCard() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <motion.a
                href="tel:+12016582698"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-pharma-blue-300 hover:bg-pharma-blue-50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-pharma-blue-100 p-3 rounded-lg group-hover:bg-pharma-blue-200 transition-colors">
                  <Phone className="w-5 h-5 text-pharma-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">(201) 658-2698</div>
                  <div className="text-sm text-gray-600">Direct Line</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:faithmiller@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-pharma-blue-300 hover:bg-pharma-blue-50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-pharma-blue-100 p-3 rounded-lg group-hover:bg-pharma-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-pharma-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">faithmiller@gmail.com</div>
                  <div className="text-sm text-gray-600">Professional Email</div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/faith-miller-sethi-drph-mph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-pharma-blue-300 hover:bg-pharma-blue-50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-pharma-blue-100 p-3 rounded-lg group-hover:bg-pharma-blue-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-pharma-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">LinkedIn Profile</div>
                  <div className="text-sm text-gray-600">faith-miller-sethi-drph-mph</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pharma-blue-600" />
              </motion.a>
            </div>
          </div>

          {/* Conference & Availability */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Conference & Availability
            </h3>
            
            <div className="space-y-6">
              {/* Conference Info */}
              <div className="p-6 bg-gradient-pharma rounded-lg text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">National Sales Network Conference</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Las Vegas, Nevada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>August 6-8, 2025</span>
                  </div>
                </div>
                <div className="mt-4 text-sm opacity-90">
                  Available for meetings, interviews, and networking sessions
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Quick Actions</h4>
                
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF Presentation
                </button>
                
                <button className="w-full btn-secondary flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </button>
                
                <a
                  href="https://linkedin.com/in/faith-miller-sethi-drph-mph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Ready to Drive Pharmaceutical Innovation
            </h4>
            <p className="text-gray-600 leading-relaxed">
              With a unique combination of advanced public health credentials (DrPH, MPH) and proven 
              commercial success ($20M+ revenue generation), I'm positioned to bridge scientific 
              excellence with business outcomes in pharmaceutical industry roles. Let's discuss how 
              my healthcare systems expertise and strategic leadership can contribute to your organization's success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
