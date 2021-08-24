import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  border: 1px solid ${( props ) => props.outlined ? props.backgroundColor : 'transparent'};
  border-radius: 4px;
  text-transform: uppercase;

  background-color: ${( props ) => props.outlined ? 'transparent' : props.backgroundColor};
  color: ${( props ) => props.color};
/* 
  ${( props ) => props.size === 'medium' && css`
    padding: 16px 24px;
  `}
  ${( props ) => props.size === 'large' && css`
    padding: 16px 64px;
  `}

  :hover {
    color: ${( props ) => props.color};
    opacity: 0.7;
  }

  ${( props ) => props.outlined && css`
    border: 3px solid ${props.color};
    background-color: ${props.backgroundColor};
    color: ${props.color};
    
    :hover {
      border: 3px solid transparent;
      background-color: ${props.color};
      color: #000;
    }
  `} */
  
`