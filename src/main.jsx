import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo.js'
import UserProvider from './Context/userContext.jsx'
import AlertsProvider from './Context/alertContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AlertsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AlertsProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
