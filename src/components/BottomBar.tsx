import React, { ReactElement } from 'react';
import styled from 'styled-components'

interface BottomBarProps {

}

export default function BottomBar({}:BottomBarProps): ReactElement {
  return (
    <Wrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: pink;
  position:fixed;
  bottom:0;
`