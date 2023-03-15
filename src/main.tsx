import React from 'react'
import ReactDOM from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#202020" highlightColor="#999">
      <App />
    </SkeletonTheme>
  </React.StrictMode>,
)
