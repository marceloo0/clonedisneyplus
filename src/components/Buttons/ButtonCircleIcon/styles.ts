import styled from 'styled-components'

import { ButtonCircleProps } from '.'

export const Container = styled.button<ButtonCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;

  background-color: ${( props ) =>  props.backgroundColor};  
  cursor: pointer;
  transition-duration: 0.3s;

  border: 3px solid ${( props ) =>  props.color};
  border-radius: 50%;

  
  > svg {
      fill: ${( props ) =>  props.color};   
    
  }

  :hover {
    border: 3px solid ${( props ) =>  props.color};
    background-color: ${( props ) =>  props.color};

    > svg {
        fill: ${( props ) =>  props.backgroundColor};
      
    }
  }
`