import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreProvider } from 'easy-peasy'
import store from './store.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
