import React, { useState } from 'react'
import { X, ExternalLink, MessageCircle, ChevronUp, Loader } from 'lucide-react'
import { Site, Comment } from '../types'
import CommentSection from './CommentSection'

interface SiteDetailsModalProps {
  site: Site
  comments: Comment[]
  onClose: () => void
  onAddComment: (siteId: number, content: string) => void
}

const SiteDetailsModal: React.FC<SiteDetailsModalProps> = ({ site, comments, onClose, onAddComment }) => {
  const [isPreviewLoading, setIsPreviewLoading] = useState(true)

  const handlePreviewLoad = () => {
    setIsPreviewLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-gray-800">{site.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-6">
          <div className="mb-8">
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden relative mb-6">
              {isPreviewLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader className="w-8 h-8 text-gray-400 animate-spin" />
                </div>
              )}
              <iframe
                src={site.url}
                title={`Preview of ${site.name}`}
                className="w-full h-full border-0"
                onLoad={handlePreviewLoad}
                style={{ opacity: isPreviewLoading ? 0 : 1 }}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-start">
              <div className="flex-grow lg:pr-8 mb-6 lg:mb-0">
                <p className="text-xl text-gray-700 mb-4">{site.description}</p>
                <p className="text-base text-gray-600 mb-6">{site.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {site.aiTools.map((tool, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>{comments.length} comments</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={site.addedBy.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(site.addedBy.name)}&background=random`}
                      alt={site.addedBy.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>Added by {site.addedBy.name}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => {/* Add upvote logic */}}
                  >
                    <ChevronUp className="w-8 h-8 text-orange-500" />
                    <span className="text-lg font-semibold text-gray-700">{site.upvotes}</span>
                  </button>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
                  >
                    Visit Site <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
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

export default SiteDetailsModal