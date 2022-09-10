import styled from 'styled-components'

export const NeomorphismBox = styled.div<{ height: string }>`
  height: ${props => props.height};
  width: 50%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: #f0f0f3;
  box-shadow: 10px 10px 21px #d3d3d6, -10px -10px 21px #fff;

  display: flex;
  flex-direction: column;
`

export const ItemHeaderBox = styled.div`
  padding: 5px;
  color: #1e90ff;
  display: flex;
  justify-content: space-between;
`

export const ImageBox = styled.img`
  display: block;
  width: 180px;
`

export const DetailsBox = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  color: #1e90ff;
`
