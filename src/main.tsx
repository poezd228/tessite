import React from 'react'
import ReactDOM from 'react-dom/client'
import Chat from './assets/apps/Chat.tsx'
import SideBar from './assets/apps/SideBar.tsx'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SideBar/>
        <Chat/>


    </React.StrictMode>,
)
