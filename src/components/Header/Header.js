import { Link } from "react-router-dom";

const Header = ({
    isAuthenticated,
    username
}) => {
    let guestNavi = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

    let userNavi = (
        <div id="user">
            <span>Welcome, {username}</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>)

    return (
        <header id="site-header">

            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>

                    {isAuthenticated
                        ? userNavi
                        : guestNavi
                    }

                </section>
            </nav>
        </header>
    );
};
export default Header;