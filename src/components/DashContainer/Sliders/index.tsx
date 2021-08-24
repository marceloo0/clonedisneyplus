import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from '../../Cards'

import { Container } from './styles'

const imagens = [
  "/images/animais.png", 
  "/images/burrow.png", 
  "/images/dinossauro.png", 
  "/images/dois.png",
  "/images/pantera.png",
  "/images/raya.png",
  "/images/soul.png",
]

export const Sliders = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container {...settings}>      
      {imagens.map(item => 
        <Card key={item} backgroundImage={item} size='large' />    
      )}    
    </Container>
  )
}