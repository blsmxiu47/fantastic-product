import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t border-gray-400 py-4">
            <nav className="px-4">
                <div className="my-4">
                    <strong className="text-pink-400">Why Intelliflex?</strong>
                    <nav className="text-pink-300 pl-2">
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
                </div>
                <div className="my-4">
                    <strong className="text-pink-400">Resources</strong>
                    <nav
                        id='footer-resources-nav'
                        className="text-pink-300 pl-2"
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
                </div>
                <div className="my-4">
                    <strong className="text-pink-400">Explore</strong>
                    <nav className="text-pink-300 pl-2">
                        <ul>
                            <li>
                                <NavLink to="/download" className="pl-2 text-sm hover:text-pink-400">
                                    Download
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mission" className="pl-2 text-sm hover:text-pink-400">
                                    Mission
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className="pl-2 text-sm hover:text-pink-400">
                                    Pricing
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
            <div className="p-4">
                <p className="text-white text-xs">We do not share your personal information (unless we get paid to do so).</p>
                <div className="h-4"></div>
                <p className="text-white text-xs">© 2023 Intelliflex. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;