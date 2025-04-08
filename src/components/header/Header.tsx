import {NavLink} from "react-router";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation()

    return (
        <header className="header">
            <img className="header__logo" src="/images/logo.png" alt="logo"/>
            <nav className="header__nav">
                <ul className="header__nav--list">
                    <li className="header__nav--item">
                        <NavLink to='/' className={({isActive}) => isActive? 'active-link': ''}>{t("Home")}</NavLink>
                    </li>
                    <li className="header__nav--item">
                        <NavLink to='/char' className={({isActive}) => isActive? 'active-link': ''}>{t("Characters")}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;