import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {branding} = props; // app.js <Header branding="Movies"/>
    return (

        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/movies/add" className="nav-link"><i className="fas fa-plus"/> New Movie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
Header.defaultProps = { //set a default props if Header does not have a branding property
    branding: 'My app'
};

Header.propTypes = { // set prop type to a string and Required
    branding: PropTypes.string.isRequired
};

export default Header;
