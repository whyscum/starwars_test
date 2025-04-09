import {NavLink} from "react-router";

const ErrorPage = () => {

    return (
        <div className="error">
            <div className="error__page">
                <span className="error__page--number">404</span>
                <img className="error__page--img" src="../../../../public/images/spaceship.png" alt="404 image"/>
            </div>
            <NavLink className="error__page--button" type="button" to="/" >Return</NavLink>
        </div>
    );
}

export default ErrorPage;