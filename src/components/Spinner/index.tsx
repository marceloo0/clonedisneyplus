/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'

export interface SpinnerProps {
  speed?: string
  size?: 'small' | 'medium' | 'large'
  name?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ speed, size, name }) => {
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