import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { TaiSanContext } from './context/TaiSanContext.jsx'

const taisan = [
  {
    id: 1,
    name: "taisan 1",
    price: 1000
  },
  {
    id: 2,
    name: "taisan 2",
    price: 2000
  },
  {
    id: 3,
    name: "taisan 3",
    price: 3000
  }
]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <TaiSanContext.Provider value={taisan}>
          <App />
       </TaiSanContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
