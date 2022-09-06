import Header from './components/Header'
import ItemList from './components/ItemList'
import { ContentWrapper } from './components/ui/Wrappers'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <ContentWrapper>
        <ItemList></ItemList>
      </ContentWrapper>
      <Footer></Footer>
    </>
  )
}

export default App
