'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Briefcase, 
  TrendingUp, 
  Target, 
  Award, 
  Phone, 
  Mail, 
  Linkedin,
  Download,
  ExternalLink
} from 'lucide-react'
import SkillsRadarChart from '@/components/SkillsRadarChart'
import CareerPathwayChart from '@/components/CareerPathwayChart'
import GapAnalysisMatrix from '@/components/GapAnalysisMatrix'
import ContactCard from '@/components/ContactCard'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'skills', label: 'Skills Analysis', icon: TrendingUp },
    { id: 'pathways', label: 'Career Pathways', icon: Target },
    { id: 'gaps', label: 'Gap Analysis', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Phone },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container-custom section-padding py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Faith Miller-Sethi, <span className="text-gradient">DrPH, MPH</span>
              </h1>
              <p className="text-lg text-gray-600">
                Pharmaceutical Industry Career Mapping & Skills Analysis
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:faithmiller@gmail.com"
                className="btn-secondary flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <button className="btn-primary flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container-custom px-6">
          <div className="flex overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeSection === section.id
                      ? 'border-pharma-blue-600 text-pharma-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container-custom section-padding">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === 'overview' && <OverviewSection />}
          {activeSection === 'skills' && <SkillsSection />}
          {activeSection === 'pathways' && <PathwaysSection />}
          {activeSection === 'gaps' && <GapsSection />}
          {activeSection === 'contact' && <ContactSection />}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Faith Miller-Sethi. Prepared for National Sales Network Conference, August 6-8, 2025.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function OverviewSection() {
  const achievements = [
    { label: 'Revenue Generated', value: '$20M+', icon: TrendingUp },
    { label: 'Strategic Partnerships', value: '46', icon: Target },
    { label: 'Market Growth', value: '84%', icon: Award },
    { label: 'Team Leadership', value: '850+', icon: User },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Bridging <span className="text-gradient">Public Health Excellence</span> 
          <br />with <span className="text-gradient">Commercial Success</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          A unique combination of advanced academic credentials (DrPH, MPH) and proven commercial 
          success, positioned for strategic pharmaceutical industry roles across multiple functions.
        </p>
      </div>

      {/* Key Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="bg-gradient-pharma w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.value}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Value Proposition */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Unique Value Propositions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-pharma-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Academic-Commercial Bridge</h4>
            <p className="text-gray-600 text-sm">
              Rare combination of DrPH/MPH with $20M+ revenue generation
            </p>
          </div>
          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-medical-teal-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Healthcare Systems Expertise</h4>
            <p className="text-gray-600 text-sm">
              Deep understanding of health systems and patient needs
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Leadership at Scale</h4>
            <p className="text-gray-600 text-sm">
              Experience managing 850+ staff and complex initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Skills Analysis & Pharmaceutical Function Mapping
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive analysis of transferable skills across pharmaceutical industry functions
        </p>
      </div>
      <SkillsRadarChart />
    </div>
  )
}

function PathwaysSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Strategic Career Pathways
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Five optimized career progression routes into pharmaceutical industry leadership
        </p>
      </div>
      <CareerPathwayChart />
    </div>
  )
}

function GapsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Skills Gap Analysis & Development Plan
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Detailed analysis of skill gaps and prioritized development recommendations
        </p>
      </div>
      <GapAnalysisMatrix />
    </div>
  )
}

function ContactSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ready to discuss pharmaceutical industry opportunities and strategic partnerships
        </p>
      </div>
      <ContactCard />
    </div>
  )
}
