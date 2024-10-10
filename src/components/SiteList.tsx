import React from 'react'
import SiteCard from './SiteCard'
import { Site, Comment } from '../types'

interface SiteListProps {
  sites: Site[]
  comments: Comment[]
  onAddComment: (siteId: number, content: string) => void
  onSiteClick: (site: Site) => void
  onVote: (siteId: number) => void
}

const SiteList: React.FC<SiteListProps> = ({ sites, comments, onAddComment, onSiteClick, onVote }) => {
  const sortedSites = [...sites].sort((a, b) => b.upvotes - a.upvotes)

  return (
    <div className="space-y-4 mt-4">
      {sortedSites.map((site) => (
        <SiteCard
          key={site.id}
          site={site}
          comments={comments.filter(comment => comment.siteId === site.id)}
          onAddComment={onAddComment}
          onClick={() => onSiteClick(site)}
          onVote={onVote}
        />
      ))}
    </div>
  )
}

export default SiteList