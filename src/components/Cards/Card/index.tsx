/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'
import { useRouter } from 'next/router'
import { useAuth } from '../../../hooks/useAuth'

export interface CardsProps {
  size: 'small' | 'large'
  backgroundImage: string
  onClick?: () => void;
  id?: string
}

export const Card: React.FC<CardsProps> = ({ 
  size,
  backgroundImage,
  onClick,
  id,
}) => {
  const router = useRouter()
  const { loadingPage } = useAuth()

  function handleCard() {
    router.push(`/detail/${id}`)
    loadingPage(true)
  }

  return (
    <Container onClick={handleCard} size={size} backgroundImage={backgroundImage}>
      <img src={backgroundImage} alt='' />
    </Container>
  )
}