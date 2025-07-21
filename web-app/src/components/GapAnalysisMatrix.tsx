'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, XCircle, Clock } from 'lucide-react'

const gapData = [
  {
    function: 'Business Development',
    match: 95,
    timeline: '1-3 months',
    priority: 'High',
    status: 'ready',
    gaps: ['Industry Knowledge', 'IP & Licensing'],
    strengths: ['Revenue Generation', 'C-suite Relationships', 'Market Development']
  },
  {
    function: 'Medical Affairs',
    match: 90,
    timeline: '3-6 months',
    priority: 'High',
    status: 'near-ready',
    gaps: ['Medical Writing', 'Clinical Data Interpretation'],
    strengths: ['Scientific Credentials', 'Healthcare Systems', 'Research Methodology']
  },
  {
    function: 'Market Access',
    match: 85,
    timeline: '3-6 months',
    priority: 'Medium',
    status: 'near-ready',
    gaps: ['HEOR Methodology', 'Economic Modeling'],
    strengths: ['Health Systems Knowledge', 'Data Analysis', 'Population Health']
  },
  {
    function: 'Sales & Marketing',
    match: 80,
    timeline: '3-6 months',
    priority: 'Medium',
    status: 'development',
    gaps: ['Pharma Sales Processes', 'Clinical Data Presentation'],
    strengths: ['Sales Experience', 'Relationship Building', 'Market Analysis']
  },
  {
    function: 'HEOR',
    match: 75,
    timeline: '6-9 months',
    priority: 'Medium',
    status: 'development',
    gaps: ['Economic Modeling', 'Statistical Software', 'RWE Analysis'],
    strengths: ['Research Methodology', 'Statistical Analysis', 'Healthcare Policy']
  },
  {
    function: 'Regulatory Affairs',
    match: 65,
    timeline: '6-12 months',
    priority: 'Low',
    status: 'long-term',
    gaps: ['FDA Processes', 'Drug Development', 'Regulatory Writing'],
    strengths: ['Regulatory Experience', 'Compliance', 'Document Preparation']
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'ready':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'near-ready':
      return <AlertCircle className="w-5 h-5 text-blue-500" />
    case 'development':
      return <Clock className="w-5 h-5 text-yellow-500" />
    case 'long-term':
      return <XCircle className="w-5 h-5 text-orange-500" />
    default:
      return <Clock className="w-5 h-5 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ready':
      return 'bg-green-50 border-green-200'
    case 'near-ready':
      return 'bg-blue-50 border-blue-200'
    case 'development':
      return 'bg-yellow-50 border-yellow-200'
    case 'long-term':
      return 'bg-orange-50 border-orange-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
}

export default function GapAnalysisMatrix() {
  return (
    <div className="space-y-8">
      {/* Priority Matrix */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Skills Gap Analysis Matrix
        </h3>
        
        <div className="space-y-4">
          {gapData.map((item, index) => (
            <motion.div
              key={item.function}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${getStatusColor(item.status)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getStatusIcon(item.status)}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{item.function}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-600">Timeline: {item.timeline}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.priority === 'High' ? 'bg-red-100 text-red-700' :
                        item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.priority} Priority
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{item.match}%</div>
                  <div className="text-sm text-gray-600">Match</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Current Strengths</h5>
                  <ul className="space-y-1">
                    {item.strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-700 mb-2">Development Gaps</h5>
                  <ul className="space-y-1">
                    {item.gaps.map((gap, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {gap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Development Recommendations */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Prioritized Development Plan
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Immediate Focus (0-3 months)</h4>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Pharmaceutical industry landscape</li>
              <li>• Medical writing fundamentals</li>
              <li>• Industry networking & relationships</li>
              <li>• Business development certification</li>
            </ul>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Short-term (3-6 months)</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Therapeutic area specialization</li>
              <li>• Medical affairs certification</li>
              <li>• HEOR fundamentals</li>
              <li>• Statistical software training</li>
            </ul>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">Medium-term (6-12 months)</h4>
            <ul className="space-y-2 text-sm text-purple-800">
              <li>• Advanced specialization</li>
              <li>• Regulatory affairs training</li>
              <li>• Leadership development</li>
              <li>• International experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
