import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.scss'
import MyContext from './context/MyContext'



// const [user, setUser] = useState<userProps>({})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    {/* <MyContext.Provider value={{user, setUser}}> */}
      <App />
    {/* </MyContext.Provider> */}
  </React.StrictMode>,
)
