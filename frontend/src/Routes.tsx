import { ABOUT_ROUTE, CONTACT_ROUTE, MAIN_ROUTE } from "./constants/constants";
import MainPage from "./pages/MainPage/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        component: <MainPage />
    },
    {
        path: CONTACT_ROUTE,
        component: <ContactPage />
    },
    {
        path: ABOUT_ROUTE,
        component: <AboutPage />
    }
]