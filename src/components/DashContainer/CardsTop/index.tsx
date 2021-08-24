import { CardVideo } from '../../Cards'
import { Container } from './styles'

export const CardsTop = () => {
  return (
    <Container>
        <CardVideo 
          backgroundImage='/images/viewers-disney.png'
          backgroundVideo='/videos/1564674844-disney.mp4' 
        />
        <CardVideo 
          backgroundImage='/images/viewers-pixar.png'
          backgroundVideo='/videos/1564676714-pixar.mp4' 
        />
        <CardVideo 
          backgroundImage='/images/viewers-marvel.png'
          backgroundVideo='/videos/1564676115-marvel.mp4' 
        />
        <CardVideo 
          backgroundImage='/images/viewers-starwars.png'
          backgroundVideo='/videos/1608229455-star-wars.mp4' 
        />
        <CardVideo 
          backgroundImage='/images/viewers-national.png'
          backgroundVideo='/videos/1564676296-national-geographic.mp4' 
        />
    </Container>
  )
}