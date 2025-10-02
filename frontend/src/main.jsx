import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/700.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppProvider>
    <App />
    </AppProvider>
  </BrowserRouter>
)
