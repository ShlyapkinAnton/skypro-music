import { Routes, Route } from 'react-router-dom'
import { MainPage } from './Pages/main-page/main.jsx'
import { NotFoundPage } from './Pages/notfound-page/notfound.jsx'
import { FavoritesPage } from './Pages/favorites-page/favorites.jsx'
import { CategotyPage } from './Pages/category-page/category.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
import { AuthPage } from './Pages/auth-page/auth.jsx'
import { Layout } from './components/Layout'

export function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/Auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage setUser={setUser} />} />
          <Route path="/Category/:id" element={<CategotyPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}