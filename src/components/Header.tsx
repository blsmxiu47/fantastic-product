const Header = () => {
    return (
        <header className="">
            <div className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between text-pink-300">
                    <div>
                        <a href="#" className="focus:outline-none focus:ring-4 focus:ring-pink-700">
                            <span
                                className="font-bold text-lg tracking-light whitespace-nowrap"
                            >
                                IntellifleX {/*  logo */}
                            </span>
                        </a>
                    </div>
                    <nav>
                        <div>
                            <ul>
                                <li>
                                    <button className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        <span>Why IntellifleX?</span>
                                        <div>
                                            <div className="menu">
                                                <ul>
                                                    <li className="menu-item">
                                                        <a>
                                                            Managers
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a>
                                                            Creative Strategists
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a>
                                                            Designers
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a>
                                                            Developers
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        <span>Resources</span>
                                        <div>
                                            <div className="menu">
                                                <ul>
                                                    <li className="menu-item">
                                                        <a>
                                                            Testimony
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a>
                                                            Guides & Tutorials
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a>
                                                            API Docs
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a>
                                                            Blog
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        Download
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        Mission
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        Book a Demo
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                        Log In
                                    </a>
                                </li>
                                <li>
                                    <button>
                                        <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                            Get Started
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;