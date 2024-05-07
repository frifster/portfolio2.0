import {NavLink} from "react-router-dom";

const Navbar = () => {
    const navLinkClassName = ({isActive}: { isActive: boolean }) => {
        return isActive ? "text-blue-500" : "text-black"
    }

    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">EA</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={navLinkClassName}>About</NavLink>
                <NavLink to="/contact" className={navLinkClassName}>Contact</NavLink>
                <NavLink to="/projects" className={navLinkClassName}>Projects</NavLink>
            </nav>
        </header>
    )
}

export default Navbar