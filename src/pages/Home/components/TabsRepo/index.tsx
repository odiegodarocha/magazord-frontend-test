import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as Tabs from '@radix-ui/react-tabs'
import { Badge, TabsList, TabsTrigger } from './styles'
import { Book, Star } from 'phosphor-react'
import { Repository } from '../Repository'
import { SearchForm } from '../SearchForm'
import { RepositoriesContext } from '../../../../contexts/RepositoriesContext'

export function TabsRepo() {
  const location = useLocation()
  const { repositories } = useContext(RepositoriesContext)
  const { repositoriesStarred } = useContext(RepositoriesContext)

  return (
    <Tabs.Root defaultValue={location.pathname.slice(1) || 'one'}>
      <TabsList>
        <TabsTrigger value="repositories" asChild>
          <Link to="/repositories" replace>
            <Book size={20} />
            Repositories <Badge>{repositories.length}</Badge>
          </Link>
        </TabsTrigger>
        <TabsTrigger value="starred" asChild>
          <Link to="/starred" replace>
            <Star size={20} />
            Starred <Badge>{repositoriesStarred.length}</Badge>
          </Link>
        </TabsTrigger>
      </TabsList>
      <div>
        <Tabs.Content value="repositories">
          <SearchForm />
          {repositories.map((repo) => {
            return (
              <Repository
                key={repo.id}
                title={repo.full_name}
                content={repo.description}
                type={repo.type}
                url={repo.html_url}
                other={repo.stargazers_count}
                forks={repo.forks_count}
              />
            )
          })}
        </Tabs.Content>
        <Tabs.Content value="starred">
          <SearchForm />
          {repositoriesStarred.map((starred) => {
            return (
              <Repository
                key={starred.id}
                title={starred.full_name}
                content={starred.description}
                type={starred.type}
                url={starred.html_url}
                other={starred.language}
                forks={starred.forks_count}
              />
            )
          })}
        </Tabs.Content>
      </div>
    </Tabs.Root>
  )
}
