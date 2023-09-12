import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />
                <main className="flex-grow container mx-auto px-1 sm:px-4">
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}

export default Layout