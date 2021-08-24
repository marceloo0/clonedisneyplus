import { Container, Content } from './styles'
import { useMovie } from '../../../hooks/useMovie'

import { Card } from '../../Cards/Card'

export const Trending = () => {
  const { movies } = useMovie()

  return (
    <Container>
      <h2>Tendencias</h2>
      <Content>
        {movies &&
          Object.values(movies)
            .filter(item => item.type === 'trending')
            .map((movie, key) => (
              <Card key={key} size='small' backgroundImage={movie.cardImg} id={movie.id}  />
          ))}
      </Content>
    </Container>
  )
}