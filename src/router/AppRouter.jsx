import { Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "../heroes/routes/PrivateRoutes"
import { PublicRoute } from "../heroes/routes/PublicRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }/>

        
        <Route path="/*" element={<PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>} />
      </Routes>
    </>
  )
}
