import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import SiteList from './components/SiteList'
import SortingControls from './components/SortingControls'
import SubmitSiteButton from './components/SubmitSiteButton'
import SubmitSiteForm from './components/SubmitSiteForm'
import LoginModal from './components/LoginModal'
import AboutPage from './components/AboutPage'
import Leaderboard from './components/Leaderboard'
import CertifiedCoolSites from './components/CertifiedCoolSites'
import SiteDetailsModal from './components/SiteDetailsModal'
import TopTools from './components/TopBuilders'
import { SortPeriod, Site, Comment, LeaderboardEntry } from './types'
import { AuthProvider, useAuth } from './context/AuthContext'
import { sampleSites } from './data/sampleSites'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

const AppContent: React.FC = () => {
  const [sites, setSites] = useState<Site[]>(sampleSites)
  const [comments, setComments] = useState<Comment[]>([])
  const [sortPeriod, setSortPeriod] = useState<SortPeriod>('all')
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const [selectedSite, setSelectedSite] = useState<Site | null>(null)
  const { user } = useAuth()

  const handleSortChange = useCallback((newSortPeriod: SortPeriod) => {
    setSortPeriod(newSortPeriod)
  }, [])

  const handleSubmitSite = useCallback((newSite: Omit<Site, 'id' | 'upvotes' | 'createdAt'>) => {
    const siteToAdd: Site = {
      ...newSite,
      id: sites.length + 1,
      upvotes: 0,
      createdAt: new Date(),
    }
    setSites(prevSites => [...prevSites, siteToAdd])
    setIsSubmitModalOpen(false)
  }, [sites])

  const handleSiteClick = useCallback((site: Site) => {
    setSelectedSite(site)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedSite(null)
  }, [])

  const handleVote = useCallback((siteId: number) => {
    setSites(prevSites => prevSites.map(site => {
      if (site.id === siteId) {
        return {
          ...site,
          upvotes: site.upvotes + 1
        }
      }
      return site
    }))
  }, [])

  const topSubmitters: LeaderboardEntry[] = React.useMemo(() => {
    const submitterCounts = sites.reduce((acc, site) => {
      const submitter = site.addedBy.name
      acc[submitter] = (acc[submitter] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return Object.entries(submitterCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
  }, [sites])

  const topTools: LeaderboardEntry[] = React.useMemo(() => {
    const toolCounts = sites.reduce((acc, site) => {
      site.aiTools.forEach(tool => {
        acc[tool] = (acc[tool] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    return Object.entries(toolCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
  }, [sites])

  const certifiedCoolSites = React.useMemo(() => {
    return [...sites]
      .sort((a, b) => b.upvotes - a.upvotes)
      .slice(0, 10)
  }, [sites])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-3xl font-bold mb-2">Cool sites built with AI</h1>
              <p className="text-gray-600 mb-6">A curation of no-code sites & tools built using AI</p>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/4 lg:pr-8">
                  <SortingControls currentSort={sortPeriod} onSortChange={handleSortChange} />
                  <SiteList
                    sites={sites}
                    comments={comments}
                    onAddComment={() => {}}
                    onSiteClick={handleSiteClick}
                    onVote={handleVote}
                  />
                </div>
                <div className="lg:w-1/4 mt-8 lg:mt-0">
                  <div className="sticky top-8">
                    <TopTools entries={topTools} />
                    <Leaderboard entries={topSubmitters} />
                    <CertifiedCoolSites sites={certifiedCoolSites} onSiteClick={handleSiteClick} />
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/about" element={<AboutPage sites={sites} />} />
        </Routes>
      </main>
      <footer className="bg-white shadow-md mt-8 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-600">Created by <a href="https://twitter.com/auslojames" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">Auslo</a></p>
          <Link to="/about" className="text-indigo-600 hover:text-indigo-800">Analytics</Link>
        </div>
      </footer>
      <SubmitSiteButton onClick={() => setIsSubmitModalOpen(true)} />
      {isSubmitModalOpen && (
        <SubmitSiteForm onClose={() => setIsSubmitModalOpen(false)} onSubmit={handleSubmitSite} />
      )}
      {selectedSite && (
        <SiteDetailsModal
          site={selectedSite}
          comments={comments.filter(comment => comment.siteId === selectedSite.id)}
          onClose={handleCloseModal}
          onAddComment={() => {}}
        />
      )}
    </div>
  )
}

export default App