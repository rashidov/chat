import React from 'react'
import { Messenger } from './pages/Messenger'
import { Route, Routes } from 'react-router-dom'
import { WithSideBarWrapper } from './routes/wrappers'
import { routes } from './routes'
import './styles/appStyless.scss'

function App() {
  return (
    <div className="layout">
      {/*<Messenger />*/}
      <Routes>
        <Route path={'/'} element={<span>asd</span>} />
        <Route path={'workspace/'} element={<WithSideBarWrapper />}>
          {/*<Route path={'messenger'} element={<Messenger />} />*/}
          <Route index element={<Messenger />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
