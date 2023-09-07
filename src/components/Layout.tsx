import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />
                <main className="flex-grow container mx-auto ox-4 px-1 sm:px-4">
                    <h1>IntellifleX</h1>
                </main>
            <Footer />
        </div>
    )
}

export default Layout