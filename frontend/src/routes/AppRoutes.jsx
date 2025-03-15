import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoutes'
import { Home, Register, Login, Cart, Pizza, Profile, NotFound } from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path='/profile' element={
          <ProtectedRoute redirectTo='/login'>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
