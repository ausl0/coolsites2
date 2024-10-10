import React from 'react'
import { PlusCircle } from 'lucide-react'

interface SubmitSiteButtonProps {
  onClick: () => void
}

const SubmitSiteButton: React.FC<SubmitSiteButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center"
    >
      <PlusCircle className="w-6 h-6 mr-2" />
      <span className="font-semibold">Submit Site</span>
    </button>
  )
}

export default SubmitSiteButton