/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'

export interface LoadingProps {
  speed?: string
  size?: 'small' | 'medium' | 'large'
  name?: string
}

export const Loading: React.FC<LoadingProps> = ({ speed = '0.65s', size, name }) => {
  return (
    <Container
      speed={speed}
      size={size}
      name={name}
    >
      <img src='./images/Spinner.svg' alt='' />
    </Container>
  )
}