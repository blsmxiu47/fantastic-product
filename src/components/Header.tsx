import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [whyIntelliflex, setWhyIntelliflex] = useState(false);
    const [resources, setResources] = useState(false);

    const [rotateChevron, setRotateChevron] = useState(false);
    const handleRotate = () => setRotateChevron(!rotateChevron);
    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

    return (
        <>
            <header className="container mx-auto px-8 py-8">
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
                    <div>
                        <button
                            className="md:hidden rounded-lg transition ease transform duration-300 focus:outline-none focus:shadow-outline"
                            onClick={() => setMobileNavOpen((prev) => !prev)}
                        >
                            <svg fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
                                <path
                                    className={mobileNavOpen ? 'hidden' : ''}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                ></path>
                                <path
                                    className={mobileNavOpen ? '' : 'hidden'}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <nav className={`${mobileNavOpen ? '': 'hidden'} flex flex-col justify-between border-b border-gray-400 py-8 px-2`}>
                <div>
                    <ul>
                        <li className="border-b border-gray-400">
                            <button
                                className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700"
                                onClick={() => setWhyIntelliflex((prev) => !prev)}
                            >
                                <span>Why IntellifleX?</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="inline w-4 h-4 mt-1 ml-1 active:rotate-90 md:-mt-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <nav className={`${whyIntelliflex ? '': 'hidden'} text-pink-300 pl-2`}>
                                <ul>
                                    <li className="">
                                        <NavLink to="/why-intelliflex/managers">
                                            Managers
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/why-intelliflex/creative-strategists">
                                            Creative Strategists
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/why-intelliflex/designers">
                                            Designers
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/why-intelliflex/developers">
                                            Developers
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </li>
                        <li>
                            <button className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                <span>Resources</span>
                                <div>
                                    <div className="">
                                        <ul>
                                            <li className="">
                                                <NavLink to="/resources/testimony">
                                                    Testimony
                                                </NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="/resources/guides-and-tutorials">
                                                    Guides & Tutorials
                                                </NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="/resources/api-docs">
                                                    API Docs
                                                </NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="/resources/blog">
                                                    Blog
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li>
                            <NavLink to="/download" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                Download
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mission" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                Mission
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/book-a-demo" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                Book a Demo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/log-in" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                Log In
                            </NavLink>
                        </li>
                        <li>
                            <button>
                                <NavLink to="/get-started" className="text-sm font-medium text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-700">
                                    Get Started
                                </NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;