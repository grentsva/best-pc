import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 5px;
  color: #fff;
  background-color: #1e90ff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ContentWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FooterWrapper = styled.div`
  background-color: #1e90ff;
  width: 100%;
`
