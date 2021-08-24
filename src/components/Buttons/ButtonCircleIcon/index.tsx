/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'

export interface ButtonCircleProps {
    /**
   * What background color to use
   */
  backgroundColor?: string
    /**
   * What text color to use
   */
  color?: string
  icon?: React.ReactNode | React.Component
    /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  name?: string
}

export const ButtonCircleIcon: React.FC<ButtonCircleProps> = ({ 
  backgroundColor, 
  color, 
  size,
  icon,
  name,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      icon={icon}
      size={size}
      {...props}
    >
      {icon ? icon : <img src={name} alt='' />}
    </Container>
  )
}