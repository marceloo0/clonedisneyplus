import { Container } from './styles'

import { Spinner } from '../../Spinner'

export interface ButtonSpinnerProps {
  type?: "button" | "submit" | "reset" | undefined
  backgroundColor?: string
  loading?: boolean
  size?: 'medium' | 'large'
  icon?: React.ReactNode | React.Component
  color?: string
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ 
  children, 
  backgroundColor, 
  loading = false,
  size,
  type,
  icon,
  color,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      loading={loading}
      size={size}
      type={type}
      color={color}
      {...props}
    > 
      {icon ? icon : <Spinner speed='0.65s' size='small' />}    
    </Container>
  )
}