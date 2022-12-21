import React from 'react';
import styled from 'styled-components'
import BottomBar from '../components/BottomBar';
import Canvas from '../components/Canvas';

export default function Main() {
  return (
    <Wrapper>
      <Canvas/>
      <BottomBar/>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  background-color: greenyellow;
  display: flex;
  flex-direction: column;
  height:100vh;
  width:100%;
`