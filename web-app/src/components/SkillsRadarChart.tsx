'use client'

import { useState } from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts'
import { motion } from 'framer-motion'

const skillsData = [
  {
    function: 'Business Development',
    current: 95,
    required: 90,
    gap: 5,
  },
  {
    function: 'Medical Affairs',
    current: 85,
    required: 90,
    gap: 5,
  },
  {
    function: 'Market Access',
    current: 75,
    required: 85,
    gap: 10,
  },
  {
    function: 'Sales & Marketing',
    current: 70,
    required: 80,
    gap: 10,
  },
  {
    function: 'HEOR',
    current: 65,
    required: 75,
    gap: 10,
  },
  {
    function: 'Regulatory Affairs',
    current: 55,
    required: 65,
    gap: 10,
  },
  {
    function: 'Clinical Research',
    current: 50,
    required: 60,
    gap: 10,
  },
  {
    function: 'Pharmacovigilance',
    current: 45,
    required: 55,
    gap: 10,
  },
]

const detailedSkills = {
  'Business Development': {
    strengths: ['Revenue Generation ($20M+)', 'C-suite Relationships', 'Market Development', 'Strategic Partnerships'],
    gaps: ['Industry Knowledge', 'IP & Licensing', 'Regulatory Pathways'],
    timeline: '1-3 months',
    match: '95%'
  },
  'Medical Affairs': {
    strengths: ['Scientific Credentials (DrPH/MPH)', 'Healthcare Systems', 'Research Methodology', 'KOL Engagement'],
    gaps: ['Medical Writing', 'Clinical Data Interpretation', 'Therapeutic Area Knowledge'],
    timeline: '3-6 months',
    match: '90%'
  },
  'Market Access': {
    strengths: ['Health Systems Knowledge', 'Data Analysis', 'Population Health', 'Policy Experience'],
    gaps: ['HEOR Methodology', 'Economic Modeling', 'HTA Processes', 'Payer Relations'],
    timeline: '3-6 months',
    match: '85%'
  },
  'Sales & Marketing': {
    strengths: ['Sales Experience', 'Relationship Building', 'Market Analysis', 'Healthcare Providers'],
    gaps: ['Pharma Sales Processes', 'Clinical Data Presentation', 'Territory Management'],
    timeline: '3-6 months',
    match: '80%'
  },
  'HEOR': {
    strengths: ['Research Methodology', 'Statistical Analysis', 'Population Health', 'Healthcare Policy'],
    gaps: ['Economic Modeling', 'Statistical Software', 'RWE Analysis', 'HTA Methodology'],
    timeline: '6-9 months',
    match: '75%'
  },
  'Regulatory Affairs': {
    strengths: ['Regulatory Experience', 'Compliance', 'Document Preparation', 'Risk Assessment'],
    gaps: ['FDA Processes', 'Drug Development', 'Regulatory Writing', 'GCP Knowledge'],
    timeline: '6-12 months',
    match: '65%'
  },
  'Clinical Research': {
    strengths: ['Research Methodology', 'Data Management', 'Project Leadership', 'Statistical Analysis'],
    gaps: ['GCP Certification', 'Clinical Protocols', 'Site Management', 'Clinical Data Systems'],
    timeline: '6-12 months',
    match: '60%'
  },
  'Pharmacovigilance': {
    strengths: ['Data Analysis', 'Regulatory Compliance', 'Risk Assessment', 'Quality Assurance'],
    gaps: ['Drug Safety Processes', 'Adverse Event Reporting', 'Safety Databases', 'Medical Writing'],
    timeline: '9-12 months',
    match: '55%'
  },
}

export default function SkillsRadarChart() {
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null)

  const getMatchColor = (match: string) => {
    const value = parseInt(match)
    if (value >= 90) return 'text-green-600 bg-green-100'
    if (value >= 80) return 'text-blue-600 bg-blue-100'
    if (value >= 70) return 'text-yellow-600 bg-yellow-100'
    if (value >= 60) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="space-y-8">
      {/* Radar Chart */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Skills Match by Pharmaceutical Function
            </h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="function" className="text-sm" />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    className="text-xs"
                  />
                  <Radar
                    name="Current Skills"
                    dataKey="current"
                    stroke="#1e40af"
                    fill="#1e40af"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Required Skills"
                    dataKey="required"
                    stroke="#0891b2"
                    fill="#0891b2"
                    fillOpacity={0.1}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Function Details
            </h3>
            <div className="space-y-3">
              {Object.entries(detailedSkills).map(([func, details]) => (
                <button
                  key={func}
                  onClick={() => setSelectedFunction(selectedFunction === func ? null : func)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedFunction === func
                      ? 'border-pharma-blue-500 bg-pharma-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{func}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMatchColor(details.match)}`}>
                      {details.match} Match
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Timeline: {details.timeline}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed View */}
      {selectedFunction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            {selectedFunction} - Detailed Analysis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-green-700 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Current Strengths
              </h4>
              <ul className="space-y-2">
                {detailedSkills[selectedFunction as keyof typeof detailedSkills].strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-orange-700 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Development Areas
              </h4>
              <ul className="space-y-2">
                {detailedSkills[selectedFunction as keyof typeof detailedSkills].gaps.map((gap, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{gap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-blue-900">Development Timeline:</span>
                <span className="ml-2 text-blue-700">
                  {detailedSkills[selectedFunction as keyof typeof detailedSkills].timeline}
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                getMatchColor(detailedSkills[selectedFunction as keyof typeof detailedSkills].match)
              }`}>
                {detailedSkills[selectedFunction as keyof typeof detailedSkills].match} Overall Match
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
