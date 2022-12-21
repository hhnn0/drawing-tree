import React, { Ref } from 'react';
import styled from 'styled-components'
import { useState, useRef, useEffect } from "react";
import Tree from '../assets/tree.jpg'
import Moon from '../assets/moon.png'

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawBackground = () => {
    const canvasCur = canvasRef.current as HTMLCanvasElement;
    const ctx = canvasCur.getContext("2d");
    const bgImage = new Image();
    bgImage.src = Moon;
    if(ctx === null) return ;
    ctx.drawImage(bgImage,0,0, window.innerWidth, window.innerHeight);
  }
  useEffect(()=>{
    drawBackground();
  },[])

  return (
    <Wrapper>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </Wrapper>

  )
}
const Wrapper = styled.div`
  flex:1;
  background-color: greenyellow;
`