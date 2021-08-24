import styled from 'styled-components'

import { ButtonSpinnerProps } from '.'

export const Container = styled.button<ButtonSpinnerProps>`
  background-color: ${( props ) =>  props.backgroundColor};
  color: ${( props ) =>  props.color};
  border: 1px solid transparent;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;

  transition-duration: 0.3s;
  padding: 8px 104px;

  > svg {
      animation: moveSvg linear infinite;
      animation-duration: 0.65s;
      fill: ${( props ) =>  props.color};
    
      @keyframes moveSvg {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
`