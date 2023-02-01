import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TransactionProvider} from './context/TransactionContext'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Transactions from "./components/Transactions";
import Marketplace from './components/Marketplace'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <BrowserRouter>
        <React.StrictMode>
                  <TransactionProvider>
                         <Routes>
                               <Route path="*" element={ <App /> }></Route>
                               <Route path="/market" element={<Marketplace/>} />
                               <Route path="/transactions" element={<Transactions/>} />
                         </Routes>
                  </TransactionProvider>
       </React.StrictMode>
      </BrowserRouter>

)
