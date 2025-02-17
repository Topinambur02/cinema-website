import { MAIN_ROUTE } from "./constants/constants";
import MainPage from "./pages/MainPage";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        component: <MainPage />
    }
]