// Styles
import "./styles.scss";

const Header = () => {

    return (
        <div className="header">
            <span>Home</span>
            <div className="menu">
                <span>Pages</span>
                <ul className="submenu">
                    <li className="desplegable">Page 1</li>
                    <li className="desplegable">Page 2</li>
                    <div className="menu-2">
                        <li className="desplegable">
                            Page 3
                            <div className="spacer-header"></div>
                            <span className="material-icons">
                                arrow_drop_down
                            </span>
                        </li>
                        <ul className="submenu-2">
                            <li className="desplegable">Item 1</li>
                            <li className="desplegable">Item 1</li>
                            <li className="desplegable">Item 1</li>
                        </ul>
                    </div>
                </ul>
            </div>
            <span>About</span>
            <span>Contact</span>
        </div>
    );
};

export default Header;
