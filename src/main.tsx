import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { Provider } from "@/components/ui/provider"

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <TonConnectUIProvider
        manifestUrl="https://nickisntavailable.github.io/ton-address-copy/tonconnect-manifest.json"
      >
        <App />
      </TonConnectUIProvider>
    </Provider>
  </StrictMode>,
)
