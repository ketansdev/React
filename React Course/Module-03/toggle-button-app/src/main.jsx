import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Toggle from '../components/Toggle.jsx'
// import Background from '../components/Background.jsx'
// import Password from '../components/Password.jsx'
import CharachterCounter from '../components/CharachterCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Toggle></Toggle> */}
   {/* <Background></Background> */}
   {/* <Password/> */}
   <CharachterCounter/>
  </StrictMode>,
)
