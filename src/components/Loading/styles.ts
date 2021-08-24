import styled, { css } from 'styled-components'

import { LoadingProps } from '.'

export const Container = styled.div<LoadingProps>`

  > img {
    width: 200px;
    height: 200px;
    animation: mymove linear infinite;
    animation-duration: ${( props ) => props.speed};
  
    @keyframes mymove {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

`