import React from 'react';
import { ExternalLink, MessageCircle, ChevronUp } from 'lucide-react';
import { Site, Comment } from '../types';
import { useAuth } from '../context/AuthContext';

interface SiteCardProps {
  site: Site;
  comments: Comment[];
  onAddComment: (siteId: number, content: string) => void;
  onClick: () => void;
  onVote: (siteId: number) => void;
}

const SiteCard: React.FC<SiteCardProps> = ({ site, comments, onAddComment, onClick, onVote }) => {
  const { user } = useAuth();

  const handleVote = () => {
    if (user) {
      onVote(site.id);
    } else {
      alert('Please log in to vote');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-4">
      <div className="p-4 sm:p-6 flex">
        <div className="flex items-center mr-4 sm:mr-6">
          <button
            className="flex flex-col items-center justify-center w-12 h-full rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              handleVote();
            }}
          >
            <ChevronUp className="w-6 h-6 text-gray-500" />
            <span className="text-sm font-semibold text-gray-700 mt-1">{site.upvotes}</span>
          </button>
        </div>
        <div className="flex-grow" onClick={onClick}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{site.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{site.description}</p>
          <div className="flex items-center text-sm text-gray-500">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{comments.length} comments</span>
            <span className="mx-2">•</span>
            <span>{site.isOwnSite ? 'Built' : 'Added'} by {site.addedBy.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;