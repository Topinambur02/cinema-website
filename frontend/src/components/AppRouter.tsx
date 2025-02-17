import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../Routes";
import { RouteType } from "../types/RouteType";
import { JSX } from "react";

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
        {publicRoutes.map(({ path, component }: RouteType): JSX.Element => (
            <Route key={path} path={path} element={component} />
        ))}
    </Routes>
  )
}

export default AppRouter