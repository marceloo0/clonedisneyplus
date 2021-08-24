import { Container } from './styles'

export interface ButtonProps {
  backgroundColor?: string
  outlined?: boolean
  size?: 'medium' | 'large'
  title?: string
  color: string
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  outlined = false,
  size,
  backgroundColor,
  color,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      size={size}
      outlined={outlined}
      color={color}
    >
      {title}
    </Container>
  )
}