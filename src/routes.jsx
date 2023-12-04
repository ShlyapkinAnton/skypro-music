import { Routes, Route } from 'react-router-dom'
import { MainPage } from './Pages/main-page/main'
import { NotFoundPage } from './Pages/notfound-page/notfound'
import { FavoritesPage } from './Pages/favorites-page/favorites'
import { CategoryPage } from './Pages/category-page/category'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { AuthPage } from './Pages/auth-page/auth'
import { Layout } from './components/Layout'

export function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/Auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage setUser={setUser} />} />
          <Route path="/Category/:id" element={<CategoryPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
