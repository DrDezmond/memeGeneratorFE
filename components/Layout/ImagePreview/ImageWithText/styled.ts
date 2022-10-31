import styled, { css } from 'styled-components'

const position = top => {
  if (top) {
    return css`
      top: 0;
    `
  } else {
    return css`
      bottom: 0;
    `
  }
}

export const StyledTextArea = styled.textarea<{
  fontSize: number
  top: boolean
}>`
  background: transparent;
  border: 1px dashed grey;
  font-family: 'impact';
  resize: none;
  -webkit-text-stroke: 1px black;
  font-size: ${({ fontSize }) => fontSize}px;
  position: absolute;
  ${({ top }) => position(top)}
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`

export const ImageInputWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
