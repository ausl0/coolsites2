import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SubscribeModalProps {
  onClose: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement the actual subscription logic here
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-lg mb-4">Thank you for subscribing!</p>
            <p className="text-sm text-gray-600">We've sent a confirmation email to {email}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="mb-4 text-gray-600">
              Stay updated with the latest AI-built websites and features on CoolSites.AI.
            </p>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubscribeModal;