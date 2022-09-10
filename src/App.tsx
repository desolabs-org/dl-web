/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Background from './parts/Background.js'
import Foreground from './parts/Foreground.js'
import Box from './pieces/Box'

export default function App() {
  return (
    <group>
      <Background />
      <Foreground />
    </group>
  )
}
