import { useLocation } from "react-router-dom"
import { ADMIN_ROUTE } from "./constants/routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import AppRouter from "./components/AppRouter"

const AppContent = () => {
    const location = useLocation()
    const isAdminRoute = location.pathname.startsWith(ADMIN_ROUTE)

    return (
        <>
            {!isAdminRoute && <Header />}
            <AppRouter />
            {!isAdminRoute && <Footer />}
        </>
    )
}

export default AppContent