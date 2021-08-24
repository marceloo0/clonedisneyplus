import styled, { css } from 'styled-components'

import { SpinnerProps } from '.'

export const Container = styled.div<SpinnerProps>`

  ${( props ) => props.size === 'small' && css`

    > img {
      width: 30px;
      height: 30px;
      animation: mymove linear infinite;
      animation-duration: ${props.speed};
    
      @keyframes mymove {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

  `}

  ${( props ) => props.size === 'medium' && css`

    > img {
      width: 200px;
      height: 200px;
      animation: mymove linear infinite;
      animation-duration: ${props.speed};
    
      @keyframes mymove {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

  `}

  ${( props ) => props.size === 'large' && css`

    > img {
      width: 300px;
      height: 300px;
      animation: mymove linear infinite;
      animation-duration: ${props.speed};
    
      @keyframes mymove {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

  `}
  

`