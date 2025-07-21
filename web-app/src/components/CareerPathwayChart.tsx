'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Target } from 'lucide-react'

const pathways = [
  {
    id: 'business-development',
    title: 'Business Development',
    subtitle: 'Fastest Entry - Recommended',
    timeline: '1-3 months',
    probability: '95%',
    salary: '$150K-$200K',
    longTerm: '$300K+',
    match: 95,
    color: 'bg-green-500',
    description: 'Leverages existing revenue generation and C-suite relationship skills',
    progression: [
      { role: 'Senior BD Manager', salary: '$150K-$180K', year: 'Year 1' },
      { role: 'Director BD', salary: '$180K-$220K', year: 'Year 2-3' },
      { role: 'VP Business Development', salary: '$220K-$300K+', year: 'Year 4-5' }
    ]
  },
  {
    id: 'medical-affairs',
    title: 'Medical Affairs',
    subtitle: 'Highest Long-term Potential',
    timeline: '3-6 months',
    probability: '90%',
    salary: '$140K-$180K',
    longTerm: '$400K+',
    match: 90,
    color: 'bg-blue-500',
    description: 'Utilizes DrPH/MPH credentials and healthcare systems expertise',
    progression: [
      { role: 'Medical Affairs Manager', salary: '$140K-$160K', year: 'Year 1' },
      { role: 'Senior Manager/Assoc Director', salary: '$160K-$200K', year: 'Year 2-3' },
      { role: 'Director Medical Affairs', salary: '$200K-$280K', year: 'Year 4-6' },
      { role: 'VP/Chief Medical Officer', salary: '$280K-$400K+', year: 'Year 7-10' }
    ]
  },
  {
    id: 'market-access',
    title: 'Market Access',
    subtitle: 'Strategic Positioning',
    timeline: '3-6 months',
    probability: '85%',
    salary: '$130K-$170K',
    longTerm: '$250K+',
    match: 85,
    color: 'bg-teal-500',
    description: 'Combines health systems knowledge with data analytics expertise',
    progression: [
      { role: 'Market Access Manager', salary: '$130K-$150K', year: 'Year 1-2' },
      { role: 'Senior Manager', salary: '$150K-$180K', year: 'Year 3-4' },
      { role: 'Director Market Access', salary: '$180K-$220K', year: 'Year 5-7' },
      { role: 'VP Market Access', salary: '$220K-$280K', year: 'Year 8-10' }
    ]
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing',
    subtitle: 'Commercial Focus',
    timeline: '3-6 months',
    probability: '80%',
    salary: '$120K-$160K',
    longTerm: '$300K+',
    match: 80,
    color: 'bg-purple-500',
    description: 'Builds on direct sales experience and healthcare provider relationships',
    progression: [
      { role: 'Senior Sales Rep', salary: '$120K-$140K', year: 'Year 1' },
      { role: 'Sales Manager', salary: '$140K-$170K', year: 'Year 2-3' },
      { role: 'Regional Sales Director', salary: '$170K-$220K', year: 'Year 4-5' },
      { role: 'VP Sales/Commercial', salary: '$220K-$300K+', year: 'Year 6-8' }
    ]
  },
  {
    id: 'regulatory-affairs',
    title: 'Regulatory Affairs',
    subtitle: 'Compliance & Strategy',
    timeline: '6-12 months',
    probability: '65%',
    salary: '$110K-$150K',
    longTerm: '$250K+',
    match: 65,
    color: 'bg-orange-500',
    description: 'Leverages government regulatory experience and compliance background',
    progression: [
      { role: 'Regulatory Specialist', salary: '$110K-$130K', year: 'Year 1-2' },
      { role: 'Senior Manager', salary: '$130K-$160K', year: 'Year 3-4' },
      { role: 'Director Regulatory', salary: '$160K-$200K', year: 'Year 5-7' },
      { role: 'VP/Chief Regulatory Officer', salary: '$200K-$280K', year: 'Year 8-10' }
    ]
  }
]

export default function CareerPathwayChart() {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Pathway Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pathways.map((pathway, index) => (
          <motion.div
            key={pathway.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`card cursor-pointer transition-all ${
              selectedPathway === pathway.id ? 'ring-2 ring-pharma-blue-500' : ''
            }`}
            onClick={() => setSelectedPathway(selectedPathway === pathway.id ? null : pathway.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-3 h-3 rounded-full ${pathway.color} mt-1`}></div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                pathway.match >= 90 ? 'bg-green-100 text-green-700' :
                pathway.match >= 80 ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {pathway.match}% Match
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {pathway.title}
            </h3>
            <p className="text-sm text-pharma-blue-600 font-medium mb-3">
              {pathway.subtitle}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {pathway.description}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Timeline: {pathway.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Success Rate: {pathway.probability}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Entry: {pathway.salary}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Long-term: {pathway.longTerm}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Pathway View */}
      {selectedPathway && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          {(() => {
            const pathway = pathways.find(p => p.id === selectedPathway)!
            return (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-4 h-4 rounded-full ${pathway.color}`}></div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {pathway.title} Career Progression
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Career Timeline & Progression
                    </h4>
                    <div className="space-y-4">
                      {pathway.progression.map((stage, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${pathway.color}`}></div>
                            {index < pathway.progression.length - 1 && (
                              <div className="w-0.5 h-8 bg-gray-200 mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-gray-900">{stage.role}</h5>
                              <span className="text-sm text-gray-500">{stage.year}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{stage.salary}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Key Success Factors
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-medium text-green-900 mb-1">Immediate Strengths</h5>
                        <p className="text-sm text-green-700">
                          {pathway.id === 'business-development' && 'Revenue generation, C-suite relationships, healthcare systems knowledge'}
                          {pathway.id === 'medical-affairs' && 'Scientific credentials, research methodology, stakeholder engagement'}
                          {pathway.id === 'market-access' && 'Health systems expertise, data analysis, population health perspective'}
                          {pathway.id === 'sales-marketing' && 'Sales experience, relationship building, healthcare provider understanding'}
                          {pathway.id === 'regulatory-affairs' && 'Regulatory experience, compliance background, risk assessment'}
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-900 mb-1">Development Focus</h5>
                        <p className="text-sm text-blue-700">
                          {pathway.id === 'business-development' && 'Industry knowledge, IP & licensing, regulatory pathways'}
                          {pathway.id === 'medical-affairs' && 'Medical writing, clinical data interpretation, therapeutic area expertise'}
                          {pathway.id === 'market-access' && 'HEOR methodology, economic modeling, HTA processes'}
                          {pathway.id === 'sales-marketing' && 'Pharmaceutical sales processes, clinical data presentation, territory management'}
                          {pathway.id === 'regulatory-affairs' && 'FDA processes, drug development, regulatory writing, GCP knowledge'}
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-1">Long-term Potential</h5>
                        <p className="text-sm text-purple-700">
                          Clear path to executive leadership with strong earning potential and strategic impact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </motion.div>
      )}
    </div>
  )
}
