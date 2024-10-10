import React from 'react'
import { SortPeriod } from '../types'

interface SortingControlsProps {
  currentSort: SortPeriod
  onSortChange: (sortPeriod: SortPeriod) => void
}

const SortingControls: React.FC<SortingControlsProps> = ({ currentSort, onSortChange }) => {
  const sortOptions: SortPeriod[] = ['day', 'week', 'month', 'all']

  return (
    <div className="flex space-x-2 mb-4">
      {sortOptions.map((option) => (
        <button
          key={option}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentSort === option
              ? 'bg-orange-100 text-orange-800 border border-orange-300'
              : 'text-gray-500 hover:bg-gray-100 border border-transparent'
          }`}
          onClick={() => onSortChange(option)}
        >
          {option === 'day' ? 'Today' : option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default SortingControls