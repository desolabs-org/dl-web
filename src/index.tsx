import { createRoot } from 'react-dom/client'
import * as React from 'react'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import App from './App'

createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
