import {Link} from "react-router";

const MainPage = () => {
    return (
        <section className="intro">
            <h1 className="intro__title">
                Find
                <span className="intro__span">
          {' all your favorite '}
        </span>
                character
            </h1>
            <h2 className="intro__subtitle">
                You can find out all the information about your favorite characters
            </h2>
            <Link className="intro__button intro__link" to="/char">
                See more...
            </Link>
            <img className="intro__pic" src="../../../../public/images/yoda.png" alt="banner"/>
        </section>
    );
};

export default MainPage;