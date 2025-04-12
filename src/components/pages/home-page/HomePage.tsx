import {Link} from "react-router";

const HomePage = () => {
    return (
        <section className="preview">
            <h1 className="preview__title">
                Find
                <span className="preview__highlight"> all your favorite </span>
                character
            </h1>
            <h2 className="preview__subtitle">
                You can find out all the information about your favorite characters
            </h2>
            <Link className="preview__link" to="/char">
                See more...
            </Link>
            <img className="preview__image" src="../../../../public/images/yoda.png" alt="banner" />
        </section>
    );
};

export default HomePage;