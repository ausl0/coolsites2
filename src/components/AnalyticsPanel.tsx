import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Site } from '../types';
import { BarChart2, PieChart as PieChartIcon, TrendingUp, Users } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

interface AnalyticsPanelProps {
  sites: Site[];
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#82E0AA', '#F8C471', '#85C1E9'];

const AnalyticsPanel: React.FC<AnalyticsPanelProps> = ({ sites }) => {
  const categoryData = useMemo(() => {
    const categories = sites.reduce((acc, site) => {
      acc[site.category] = (acc[site.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(categories).map(([name, value]) => ({ name, value }));
  }, [sites]);

  const toolData = useMemo(() => {
    const tools = sites.reduce((acc, site) => {
      site.aiTools.forEach(tool => {
        acc[tool] = (acc[tool] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(tools)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
  }, [sites]);

  const upvotesOverTime = useMemo(() => {
    const sortedSites = [...sites].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    let cumulativeUpvotes = 0;
    return sortedSites.map(site => {
      cumulativeUpvotes += site.upvotes;
      return {
        date: site.createdAt.toISOString().split('T')[0],
        upvotes: cumulativeUpvotes
      };
    });
  }, [sites]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Site Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ErrorBoundary>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <BarChart2 className="w-6 h-6 mr-2 text-orange-500" />
              Site Categories
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" tick={{fill: '#4a5568'}} />
                <YAxis tick={{fill: '#4a5568'}} />
                <Tooltip contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0'}} />
                <Legend />
                <Bar dataKey="value" fill="#FF6B6B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <PieChartIcon className="w-6 h-6 mr-2 text-orange-500" />
              Top AI Tools
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={toolData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {toolData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
              Cumulative Upvotes Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={upvotesOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="date" tick={{fill: '#4a5568'}} />
                <YAxis tick={{fill: '#4a5568'}} />
                <Tooltip contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0'}} />
                <Legend />
                <Bar dataKey="upvotes" fill="#4ECDC4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ErrorBoundary>
      </div>
      <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <Users className="w-6 h-6 mr-2 text-orange-500" />
          General Statistics
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Total number of sites: <span className="font-semibold">{sites.length}</span></li>
          <li>Total upvotes: <span className="font-semibold">{sites.reduce((sum, site) => sum + site.upvotes, 0)}</span></li>
          <li>Average upvotes per site: <span className="font-semibold">{(sites.reduce((sum, site) => sum + site.upvotes, 0) / sites.length).toFixed(2)}</span></li>
          <li>Number of unique AI tools: <span className="font-semibold">{new Set(sites.flatMap(site => site.aiTools)).size}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsPanel;