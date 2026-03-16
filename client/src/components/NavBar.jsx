import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navBar">
            <ul className="navBarLinks">
                <NavLink className="animated-underline" to={"/"}>Home</NavLink>
                <NavLink className="animated-underline" to={"/about"}>Sobre Mí</NavLink>
                <NavLink className="animated-underline" to={"/portfolio"}>Portfolio</NavLink>
                <Link className="animated-underline" to="/#contactLanding">Contacto</Link>
            </ul>
        </nav>
    )
}