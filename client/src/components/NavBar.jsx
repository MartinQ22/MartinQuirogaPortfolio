import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <nav className="navBar">
            <ul className="navBarLinks">
                <NavLink className="animated-underline" to={"/"} onClick={scrollToTop}>Home</NavLink>
                <NavLink className="animated-underline" to={"/about"} onClick={scrollToTop}>Sobre Mí</NavLink>
                <NavLink className="animated-underline" to={"/portfolio"} onClick={scrollToTop}>Portfolio</NavLink>
                <Link className="animated-underline" to="/#contactLanding">Contacto</Link>
            </ul>
        </nav>
    )
}