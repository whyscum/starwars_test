import { useEffect, useState, useCallback, SetStateAction} from "react";
import axios from "axios";
import ErrorPage from "../error-page/ErrorPage.tsx";
import CardList from "../../card-list/CardList.tsx";
import {Character} from "../../../shared/types/character.ts";
import {useTranslation} from "react-i18next";
import CardPopup from "../../popup/CardPopup.tsx";
import FilterCard from "../../filter/FilterCard.tsx";

const CharPage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://swapi.dev/api/people/');
    const [hasMore, setHasMore] = useState(true);
    const [selectedCard, setSelectedCard] = useState<Character | undefined>(undefined);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('')

    const {t, i18n} = useTranslation()
    const languages = ["en", "wookie"]

    const switchLanguage = () => {
        const currentLang = i18n.language;
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        const nextLang = languages[nextIndex];
        i18n.changeLanguage(nextLang);
    };

    const handlePopupOpen = (char: Character) => {
        setIsPopupOpen(true);
        setSelectedCard(char);
    }

    const handlePopupClose = () => {
        setIsPopupOpen(false);
        setSelectedCard(undefined);
    }

    const fetchCharacters = useCallback(async () => {
        if (!hasMore || loading) return;

        setLoading(true);

        try {
            const response = await axios.get(currentPageUrl);
            if (response.status >= 400) {
                setError("Ошибка при загрузке данных");
                return;
            }

            setCharacters(prev => [...prev, ...response?.data?.results ?? []])
            setCurrentPageUrl(response.data.next);

            if (!response.data.next) {
                setHasMore(false);
                setCurrentPageUrl('')
            }
        } catch {
            setError("Произошла ошибка при загрузке данных");
        } finally {
            setLoading(false);
        }
    }, [currentPageUrl, hasMore, loading]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                document.documentElement.scrollHeight -
                (window.innerHeight + window.scrollY) <
                100
            ) {
                fetchCharacters()
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [characters, fetchCharacters]);

    useEffect(() => {
        fetchCharacters()
    }, []);

    if (error) {
        return (<ErrorPage/>);
    }
    return (
        <main>
            <section className="characters">
                <button onClick={switchLanguage}>{i18n.language.toUpperCase()}</button>
                <h2 className="characters__title">
                    {characters.length}
                    <span className="characters__title-accent">{t("Peoples")}</span>
                    {t("for you to choose your favorite")}
                </h2>
                <FilterCard onChange={(sort: SetStateAction<string>)=> setSelectedSort(sort)} />
                <CardList characters={characters} onCardClick={handlePopupOpen} color={selectedSort}/>
                {selectedCard && (<CardPopup card={selectedCard} isPopupOpen={isPopupOpen} onClose={handlePopupClose} />) }
            </section>
        </main>
);
};

export default CharPage;