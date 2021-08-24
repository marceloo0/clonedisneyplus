import type { NextPage } from 'next'
import { Container, LoadingContainer } from '../styles/pages/dashboard'
import { useAuth } from '../hooks/useAuth'
import { Header, Trending, Sliders, CardsTop, Recommends, NewDisney, Originals, Loading } from '../components'

const Dashboard: NextPage = () => {
  const { loading } = useAuth()
  return (
    <Container>
      <Header colorBlack='#1A1D29' />
      {loading ? 
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
      : 
        <>
          <Sliders />
          <CardsTop />
          <Recommends />
          <NewDisney />
          <Originals />
          <Trending />
        </>
      }
    </Container>
  )
}

export default Dashboard
