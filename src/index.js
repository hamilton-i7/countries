import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import App, { HOME_PATH } from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router basename={HOME_PATH}>
      <App />
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
