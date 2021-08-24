import styled from 'styled-components'

import Slider from 'react-slick';

export const Container = styled(Slider)`
  margin-top: 65px;
  width: 100%;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  
  .slick-prev {
    left: -75px;
  }
  
  .slick-next {
    right: -75px;
  }
`
