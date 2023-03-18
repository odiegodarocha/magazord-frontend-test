import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Repo {
  id: number
  full_name: string
  description: string
  type: 'all' | 'public' | 'private' | 'forks' | 'sources' | 'member'
  html_url: string
  stargazers_count: number
  language: string
  forks_count: number
}

interface RepositoriesContextType {
  repositories: Repo[]
  repositoriesStarred: Repo[]
  fetchRepos: () => Promise<void>
  fetchReposStarred: () => Promise<void>
}

interface RepositoriesProviderProps {
  children: ReactNode
}

export const RepositoriesContext = createContext({} as RepositoriesContextType)

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepos] = useState<Repo[]>([])
  const [repositoriesStarred, setRepositoriesStarred] = useState<Repo[]>([])

  async function fetchRepos() {
    const response = await api.get('users/odiegodarocha/repos')

    setRepos(response.data)
  }

  async function fetchReposStarred() {
    const response = await api.get('users/odiegodarocha/starred')

    setRepositoriesStarred(response.data)
  }

  useEffect(() => {
    fetchRepos()
    fetchReposStarred()
  }, [])

  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        repositoriesStarred,
        fetchRepos,
        fetchReposStarred,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  )
}
