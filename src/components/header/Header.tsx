import {Link} from "react-router";
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t} = useTranslation()

    return (
        <header className="header">
            <img className="header__logo" src="/images/logo.png" alt="logo"/>
            <nav className="header__nav">
                <ul className="header__nav--list">
                    <li className="header__nav--item">
                        <Link to='/'>{t("Home")}</Link>
                    </li>
                    <li className="header__nav--item">
                        <Link to='/char'>{t("Characters")}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;