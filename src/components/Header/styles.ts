import styled from 'styled-components'

import { HeaderProps } from '.'

export const Container = styled.div<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 74px;
  background-color: ${( props ) => props.colorBlack};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  margin-right: auto;
  margin-left: 25px;
`;

export const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;

  > img {
    margin-right: 24px;;
  }
`;

export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 8px 16px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;

  > span {
    color: #FFF;
  }
`;

export const Login = styled.div`
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;
  
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

`;

export const SignOut = styled.div`
  position: absolute;
  right: 36px;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-right: 36px;
`;
