/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'

export interface CardVideoProps {
  backgroundImage: string
  backgroundVideo: string
}

export const CardVideo: React.FC<CardVideoProps> = ({ 
  backgroundImage,
  backgroundVideo
}) => {
  return (
    <Container>
      <img src={backgroundImage} alt='' />
      <video loop={true} playsInline={true} autoPlay >
        <source src={backgroundVideo}
          type="video/mp4"
        />
      </video>
    </Container>
  )
}