/* eslint-disable @next/next/no-img-element */
import { Container } from './styles'
import { useRouter } from 'next/router'

export interface ButtonProps {
  color?: string
  icon?: React.ReactNode | React.Component
  backgroundColor?: string
  name?: string
  onClick?: () => void
  /**
   * How large should the button be?
   */
   size?: 'medium' | 'large'
   loading?: boolean
   speed?: string
}

export const ButtonWithIcon: React.FC<ButtonProps> = ({ 
  children, 
  color, 
  icon,
  backgroundColor,
  name,
  onClick,
  size,
  loading = false,
  speed = '0.65s',
  ...props
}) => {
  const router = useRouter()

  return (
    <>
    <Container
      onClick={onClick}
      icon={icon}
      color={color}
      size={size}
      backgroundColor={backgroundColor}
      loading={loading}
      speed={speed}
      {...props}
    >
      {icon ? icon : <img src={name} alt={name} />}
      <span>{children}</span>
    </Container>
    </>
  )
}