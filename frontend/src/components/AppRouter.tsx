import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../Routes'
import { RouteType } from '../types/RouteType'
import { JSX, useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import { StoresType } from '../types/StoresType'
import { UserType } from '../types/UserType'

const AppRouter = (): JSX.Element => {
  const { userStore } = useContext(Context) as StoresType
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await userStore.getCurrentUser()
      setUser(currentUser)
    }
    fetchUser()
  }, [])

  const role = user?.role

  return (
    <Routes>
      {publicRoutes.map(
        ({ path, component }: RouteType): JSX.Element => (
          <Route key={path} path={path} element={component} />
        )
      )}

      {role === 'admin' &&  privateRoutes.map(
        ({ path, component }: RouteType): JSX.Element => (
          <Route key={path} path={path} element={component} />
        )
      )}
    </Routes>
  )
}

export default AppRouter
