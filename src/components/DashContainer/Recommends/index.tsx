import { Container, Content, Wrap } from './styles'
import Link from 'next/link'
import { useMovie } from '../../../hooks/useMovie'

import { Card } from '../../Cards/Card'

export const Recommends = () => {
  const { movies } = useMovie()

  return (
    <Container>
      <h2>Recomendados para Você</h2>
      <Content>
        {movies &&
          Object.values(movies)
            .filter(item => item.type === 'recommend')
            .map((movie, key) => (
              <Card key={key} size='small' backgroundImage={movie.cardImg} id={movie.id} />
          ))}
      </Content>
    </Container>
  )
}