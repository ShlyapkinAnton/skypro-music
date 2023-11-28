import React from 'react'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { UserContext } from './Context/UserContext'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') || null)

  // const handleLogout = () => {
  //   localStorage.removeItem('user')
  //   localStorage.removeItem('auth')
  //   window.location.href = '/Auth'
  // }

  return (
    <UserContext.Provider value={user}>
      <Provider store={store}>
        <AppRoutes user={user} setUser={setUser} />
      </Provider>
    </UserContext.Provider>
  )
}
