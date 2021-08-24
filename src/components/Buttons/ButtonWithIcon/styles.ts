import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-transform: uppercase;
  border: transparent;
  background-color: ${( props ) => props.backgroundColor};
  cursor: pointer;

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  
  span {
    color: ${( props ) => props.color};
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    margin-left: 16px;
    font-weight: bold;

    &:before {
      background-color: ${( props ) => props.color};
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    opacity: 0.7;

    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }


  ${( props ) => props.size === 'medium' && css`
    padding: 12px 24px;
  `}
  
  ${( props ) => props.size === 'large' && css`
    padding: 16px 64px;
  `}
  
  ${( props ) => props.loading && css`
    padding: 16px 64px;

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

  @media (max-width: 768px) {
    > span {
      display: none;
    }
  }


`