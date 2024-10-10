import React from 'react';
import { User } from 'firebase/auth';

interface UserProfileProps {
  user: User;
  submittedSites: number;
  totalUpvotes: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, submittedSites, totalUpvotes }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}`}
          alt={user.displayName || 'User'}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.displayName || 'Anonymous User'}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div>
          <p className="font-semibold">{submittedSites}</p>
          <p className="text-gray-600">Sites Submitted</p>
        </div>
        <div>
          <p className="font-semibold">{totalUpvotes}</p>
          <p className="text-gray-600">Total Upvotes</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;