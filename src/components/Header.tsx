import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
    const handleDropdownClick = (targetId: string) => {
      setActiveDropdown((prevId) => (prevId === targetId ? null : targetId));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                if (mobileNavOpen) {
                    setMobileNavOpen(false);
                }
                if (activeDropdown) {
                    setActiveDropdown(null);
                }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileNavOpen]);

    return (
        <>
            <header className="px-8 py-4 z-10 bg-black w-full">
                <div className="flex items-center justify-between text-pink-300">
                    <div>
                        <a href="/">
                            <span
                                className="font-bold text-lg tracking-light whitespace-nowrap"
                            >
                                IntellifleX {/*  logo */}
                            </span>
                        </a>
                    </div>
                    <nav>
                        <ul className="hidden md:flex items-center space-x-8">
                            <li>
                                <button
                                    onClick={() => handleDropdownClick('why-intelliflex')}    
                                >
                                    <span className="text-sm font-medium">Why IntellifleX?</span>
                                    <svg
                                        id="why-intelliflex-chevron"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        className={`transition origin-center duration-800 ease-in-out inline w-4 h-4 align-middle ml-2${activeDropdown === 'why-intelliflex' ? ' rotate-90' : ''}`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <nav
                                    id='why-intelliflex-menu'
                                    className={`absolute top-[64px] bg-black text-pink-300 pt-2 pb-4 px-4 rounded-b-lg border-b border-x border-pink-300${activeDropdown === 'why-intelliflex' ? '' : ' hidden'}`}
                                >
                                    <ul>
                                        <li>
                                            <NavLink
                                                to="/why-intelliflex/managers"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Managers
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/why-intelliflex/creative-strategists"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Creative Strategists
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/why-intelliflex/designers"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Designers
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/why-intelliflex/developers"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Developers
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleDropdownClick('resources')}
                                >
                                    <span className="text-sm font-medium">Resources</span>
                                    <svg
                                        id="resources-chevron"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        className={`transition origin-center duration-800 ease-in-out inline w-4 h-4 align-middle ml-2${activeDropdown === 'resources' ? ' rotate-90' : ''}`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <nav
                                    id='resources-menu'
                                    className={`absolute top-[64px] bg-black text-pink-300 pt-2 pb-4 px-4 rounded-b-lg border-b border-x border-pink-300${activeDropdown === 'resources' ? '' : ' hidden'}`}
                                >
                                    <ul>
                                        <li>
                                            <NavLink
                                                to="/resources/testimony"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Testimony
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/resources/guides-and-tutorials"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Guides & Tutorials
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/resources/api-docs"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                API Docs
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/resources/blog"
                                                className="pl-2 text-sm hover:text-pink-400"
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                            <li>
                                <NavLink to="/download" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                    Download
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mission" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                    Mission
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                    Pricing
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <button
                            className="md:hidden rounded-lg transition ease transform duration-300"
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
            <nav className={`absolute z-0 top-0 transform transition-transform duration-300 w-full bg-black flex flex-col justify-between px-2${mobileNavOpen ? ' translate-y-[62px]': ' -translate-y-full'}`}>
                <div>
                    <ul>
                        <li className="border-t border-b border-gray-400">
                            <button
                                id="why-intelliflex-mobile"
                                className="w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400" 
                                onClick={() => handleDropdownClick('why-intelliflex-mobile')}
                            >
                                <span>Why IntellifleX?</span>
                                <svg
                                    id="why-intelliflex-mobile-chevron"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className={`transition origin-center duration-800 ease-in-out inline w-4 h-4 absolute right-4 align-middle${activeDropdown === 'why-intelliflex-mobile' ? ' rotate-90' : ''}`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <nav
                                id='why-intelliflex-mobile-menu'
                                className={`text-pink-300 pl-2${activeDropdown === 'why-intelliflex-mobile' ? '' : ' hidden'}`}
                            >
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/why-intelliflex/managers"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Managers
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/why-intelliflex/creative-strategists"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Creative Strategists
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/why-intelliflex/designers"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Designers
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/why-intelliflex/developers"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Developers
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </li>
                        <li className="border-b border-gray-400">
                            <button
                                id="resources-mobile"
                                className="w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400"
                                onClick={() => handleDropdownClick('resources-mobile')}
                            >
                                <span>Resources</span>
                                <svg
                                    id="resources-mobile-chevron"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className={`transition origin-center duration-800 ease-in-out inline w-4 h-4 absolute right-4 align-middle${activeDropdown === 'resources-mobile' ? ' rotate-90' : ''}`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <nav
                                id='resources-mobile-menu'
                                className={`text-pink-300 pl-2${activeDropdown === 'resources-mobile' ? '' : ' hidden'}`}
                            >
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/resources/testimony"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Testimony
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/resources/guides-and-tutorials"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Guides & Tutorials
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/resources/api-docs"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            API Docs
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/resources/blog"
                                            className="pl-2 text-sm hover:text-pink-400"
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </li>
                        <li className="border-b border-gray-400">
                            <NavLink to="/download" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                Download
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-400">
                            <NavLink to="/mission" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                Mission
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-400">
                            <NavLink to="/pricing" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="border-b border-gray-400">
                            <NavLink to="/book-a-demo" className="block w-full py-2 px-2 text-left text-sm leading-4 font-medium text-pink-300 hover:text-pink-400">
                                Book a Demo
                            </NavLink>
                        </li>
                        <li className="pt-6 pb-2">
                            <button className="block w-full py-1 px-2 border border-white rounded-lg bg-pink-600 hover:bg-pink-400 active:bg-pink-500">
                                <NavLink to="/log-in" className="text-sm font-medium text-white">
                                    Log In
                                </NavLink>
                            </button>
                        </li>
                        <li className="py-2">
                            <button className="block w-full py-1 px-2 border border-white rounded-lg bg-pink-600 hover:bg-pink-400 active:bg-pink-500">
                                <NavLink to="/get-started" className="text-sm font-medium text-white">
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