import { Routes, Route } from 'react-router-dom'
import { MainPage } from './Pages/main-page/main.jsx'
import { NotFoundPage } from './Pages/notfound-page/notfound.jsx'
import { LoginPage } from './Pages/login-page/login.jsx'
import { RegisterPage } from './Pages/register-page/register.jsx'
import { FavoritesPage } from './Pages/favorites-page/favorites.jsx'
import { CategotyPage } from './Pages/category-page/category.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage setUser={setUser} />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:id" element={<CategotyPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
