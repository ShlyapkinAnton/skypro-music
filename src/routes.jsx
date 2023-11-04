import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './Pages/main-page/main.jsx'
import { NotFoundPage } from './Pages/notfound-page/notfound.jsx'
import { FavoritesPage } from './Pages/favorites-page/favorites.jsx'
import { CategotyPage } from './Pages/category-page/category.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
import { AuthPage } from './Pages/auth-page/auth.jsx'

export const AppRoutes = ({user, setUser, isLoginMode, setIsLoginMode, activeTrack, setActiveTrack}) => {

  return (
    <Routes>

      <Route path="/auth" element={<AuthPage setUser={setUser} isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage user={user} setUser={setUser} activeTrack={activeTrack} setActiveTrack={setActiveTrack}/>} />
        <Route path="/favorites" element={<FavoritesPage user={user} setUser={setUser} activeTrack={activeTrack} setActiveTrack={setActiveTrack}/>} />
        <Route path="/category/:id" element={<CategotyPage user={user} setUser={setUser} activeTrack={activeTrack} setActiveTrack={setActiveTrack}/>} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}
