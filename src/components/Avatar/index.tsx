import { Container } from './styles'

export interface AvatarProps {
  /**
   * What background color to use
   */
  backgroundImage: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
}

export const Avatar: React.FC<AvatarProps> = ({
  backgroundImage,
  size,
}) => {
  return (
    <Container 
      backgroundImage={backgroundImage}
      size={size}
    />
  )
}