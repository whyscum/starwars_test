const ErrorPage = () => {

    return (
        <div className="page">
            <div className="error_page">
                <span className="error__page--number">404</span>
                <img className="error__page--img" src="../../../../public/images/spaceship.png" alt="404 image"/>
            </div>
            <button className="error__page--button" type="button" >Return</button>
        </div>
    );
}

export default ErrorPage;