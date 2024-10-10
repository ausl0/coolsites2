import React from 'react'
import { Site } from '../types'
import { Award } from 'lucide-react'

interface CertifiedCoolSitesProps {
  sites: Site[]
  onSiteClick: (site: Site) => void
}

const CertifiedCoolSites: React.FC<CertifiedCoolSitesProps> = ({ sites, onSiteClick }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
        <Award className="w-5 h-5 mr-2 text-orange-500" />
        Certified Cool Sites
      </h3>
      <ul className="space-y-2">
        {sites.map((site) => (
          <li 
            key={site.id} 
            className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors duration-200"
            onClick={() => onSiteClick(site)}
          >
            <span className="text-sm font-medium text-gray-700 truncate flex-grow mr-2">{site.name}</span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              {site.upvotes}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CertifiedCoolSites