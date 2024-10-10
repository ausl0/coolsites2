import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Comment } from '../types'

interface CommentSectionProps {
  siteId: number
  comments: Comment[]
  onAddComment: (content: string) => void
}

const CommentSection: React.FC<CommentSectionProps> = ({ siteId, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      onAddComment(newComment.trim())
      setNewComment('')
    }
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 p-3 rounded-md mb-2">
          <p className="text-sm text-gray-800">{comment.content}</p>
          <p className="text-xs text-gray-500 mt-1">
            By {comment.user.displayName || comment.user.email} on {comment.createdAt.toLocaleString()}
          </p>
        </div>
      ))}
      {user ? (
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
            placeholder="Add a comment..."
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition-colors duration-200"
          >
            Post Comment
          </button>
        </form>
      ) : (
        <p className="mt-4 text-sm text-gray-600">Please log in to add a comment.</p>
      )}
    </div>
  )
}

export default CommentSection