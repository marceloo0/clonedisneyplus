import styled from 'styled-components'

export const Container = styled.div`
  /* background-repeat: no-repeat;
  background-size: contain cover;
  background-image: url('../background_home.png');
  background-color: #030615;
  width: 100%;
  height: 100vh; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Section = styled.div`
  margin: 260px 60px;
  width: 500px;
`
export const AccessSection = styled.div`
  margin-top: 48px;
`
export const Title = styled.h1`
  font-size: 48px;
`
export const Description = styled.span``
export const Footer = styled.div`
  margin: 100px 0;
`
export const Background = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../images/background_home.png");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`
