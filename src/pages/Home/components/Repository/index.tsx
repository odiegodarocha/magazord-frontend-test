import { GitFork, Star } from 'phosphor-react'
import { Article, Content, Footer, Header } from './styles'

interface ItemProps {
  title: string
  content: string
  type: 'all' | 'public' | 'private' | 'forks' | 'sources' | 'member'
  url: string
  other: number | string
  forks: number
}

export function Repository(content: ItemProps) {
  return (
    <Article href={content.url} target="_blank">
      <Header>
        <h3>
          {content.title.split('/').map(function (title, index) {
            return <span key={index}>{title}</span>
          })}
        </h3>
      </Header>
      <Content>
        <p>{content.content}</p>
      </Content>
      <Footer>
        <span>
          {!isNaN(+content.other) && content.other === '' && (
            <Star weight="fill" />
          )}{' '}
          {content.other}
        </span>
        <span>
          <GitFork /> {content.forks}
        </span>
      </Footer>
    </Article>
  )
}
