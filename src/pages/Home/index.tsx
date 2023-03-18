import { Sidebar } from '../../components/Sidebar'
import { MainWrapper } from './styles'
import { TabsRepo } from './components/TabsRepo'

export function Home() {
  return (
    <MainWrapper>
      <Sidebar />

      <TabsRepo />
    </MainWrapper>
  )
}
