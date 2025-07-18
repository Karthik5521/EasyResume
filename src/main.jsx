import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react' // ✅ Import Analytics

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics /> 
  </>
)
