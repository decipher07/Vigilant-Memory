import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TransactionContext from './context/TransactionContext'

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)