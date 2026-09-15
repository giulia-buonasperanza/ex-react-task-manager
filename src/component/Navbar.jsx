import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/tasks">
                Lista Task
            </NavLink>

            <NavLink to="/tasks/add">
                Aggiungi Task
            </NavLink>
        </nav>
    );
}

export default Navbar;