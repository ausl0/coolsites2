import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Site } from '../types';

interface SubmitSiteFormProps {
  onClose: () => void;
  onSubmit: (site: Omit<Site, 'id' | 'upvotes' | 'createdAt'>) => void;
}

const SubmitSiteForm: React.FC<SubmitSiteFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [url, setUrl] = useState('');
  const [aiTools, setAiTools] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      longDescription,
      url,
      aiTools: aiTools.split(',').map(tool => tool.trim()),
      submitterInfo: '',
      isOwnSite: true,
      addedBy: {
        name: 'Anonymous',
      },
      tags: [],
      category: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Submit an AI-built site</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter site name"
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">URL</label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Tagline <span className="text-gray-500">({description.length}/200)</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 200))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              rows={2}
              placeholder="Brief description of the site"
              maxLength={200}
            />
          </div>
          <div>
            <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-1">Long Description</label>
            <textarea
              id="longDescription"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              rows={4}
              placeholder="Detailed description of the site"
            />
          </div>
          <div>
            <label htmlFor="aiTools" className="block text-sm font-medium text-gray-700 mb-1">AI Tools Used (comma-separated)</label>
            <input
              type="text"
              id="aiTools"
              value={aiTools}
              onChange={(e) => setAiTools(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="e.g. GPT-3, DALL-E, Midjourney"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            Submit Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitSiteForm;