import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SubscribeModal from './SubscribeModal';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Zap className="w-8 h-8 text-orange-500 mr-2" />
          <span className="text-xl font-bold text-gray-900">CoolSites.AI</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</Link>
            </li>
            <li>
              <button
                onClick={() => setIsSubscribeModalOpen(true)}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-1" />
                Subscribe
              </button>
            </li>
            <li>
              {loading ? (
                <span className="text-sm text-gray-600">Loading...</span>
              ) : user ? (
                <div className="flex items-center">
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || 'User'}`}
                    alt={user.displayName || 'User'}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <button
                    onClick={signOut}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:bg-orange-600 transition-all duration-300"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {isSubscribeModalOpen && (
        <SubscribeModal onClose={() => setIsSubscribeModalOpen(false)} />
      )}
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </header>
  );
};

export default Header;