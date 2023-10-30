import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ContainerCenter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerBig = styled.h1`
  font-size: 160px;
  font-weight: 400;
  line-height: 168px;
  color: #ffffff;
  padding-bottom: 2px;
`

export const ContainerHeader = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: #ffffff;
`

export const ContainerText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4e4e4e;
  padding-top: 8px;
  padding-bottom: 36px;
`

export const ContainerButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 6px;
  background: #580ea2;
  border-style: none;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`

export const ContainerButtonLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
`
