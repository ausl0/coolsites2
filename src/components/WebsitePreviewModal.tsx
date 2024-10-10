import React from 'react'
import { X, ExternalLink } from 'lucide-react'
import { Site, Comment } from '../types'
import CommentSection from './CommentSection'

interface WebsitePreviewModalProps {
  site: Site
  comments: Comment[]
  onClose: () => void
  onAddComment: (siteId: number, content: string) => void
}

const WebsitePreviewModal: React.FC<WebsitePreviewModalProps> = ({ site, comments, onClose, onAddComment }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">{site.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow overflow-hidden flex">
          <div className="w-2/3 h-full">
            <iframe
              src={site.url}
              title={site.name}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
          <div className="w-1/3 p-4 overflow-y-auto">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">{site.description}</p>
              <p className="text-sm text-gray-800 mb-2">{site.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {site.aiTools.map((tool, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center mt-2"
              >
                Visit site <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            <CommentSection
              siteId={site.id}
              comments={comments}
              onAddComment={(content) => onAddComment(site.id, content)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsitePreviewModal