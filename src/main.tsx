import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://nickisntavailable.github.io/ton-address-copy/tonconnect-manifest.json"
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
