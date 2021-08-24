import styled, { css } from 'styled-components'

import { AvatarProps } from '.'

export const Container = styled.div<AvatarProps>`

  ${( props ) => props.size === 'small' && css`
    width: 48px;
    height: 48px;

    border: 3px solid 'transparent';
    border-radius: 50%;

    background-image: url(${props.backgroundImage && props.backgroundImage});
    background-size: contain;

    :hover {
      width: 52px;
      height: 52px;

      border: 3px solid #FFFFFF;
      border-radius: 50%;
    }
  `}

  ${( props ) => props.size === 'medium' && css`
    width: 88px;
    height: 88px;

    background-image: url(${props.backgroundImage && props.backgroundImage});
    background-size: contain;

    :hover {
      width: 92px;
      height: 92px;

      border: 3px solid #FFFFFF;
      border-radius: 50%;
    }
  `}

  ${( props ) => props.size === 'large' && css`
    width: 140px;
    height: 140px;

    background-image: url(${props.backgroundImage && props.backgroundImage});
    background-size: contain;

    :hover {
      width: 145px;
      height: 145px;

      border: 3px solid #FFFFFF;
      border-radius: 50%;
    }
  `}

`