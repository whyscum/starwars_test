import { useEffect, useState, useCallback, useRef, SetStateAction } from "react";
import axios from "axios";
import CardList from "../../card-list/CardList.tsx";
import { Character } from "../../../shared/types/character.ts";
import { useTranslation } from "react-i18next";
import CardPopup from "../../popup/CardPopup.tsx";
import FilterCard from "../../filter/FilterCard.tsx";
import { Navigate } from "react-router";
import Loader from "../../loader/Loader.tsx";

const CharPage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const loadingRef = useRef(false)
    const [error, setError] = useState<string | null>(null);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://swapi.dev/api/people/');
    const [hasMore, setHasMore] = useState(true);
    const [selectedCard, setSelectedCard] = useState<Character | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('')
    const [dataCount, setDataCount] = useState(0)

    const {t, i18n} = useTranslation()
    const languages = ["en", "wookie"]

    const switchLanguage = () => {
        const currentLang = i18n.language
        const currentIndex = languages.indexOf(currentLang)
        const nextIndex = (currentIndex + 1) % languages.length
        const nextLang = languages[nextIndex]
        i18n.changeLanguage(nextLang)
    };

    const handlePopupOpen = (char: Character) => {
        setIsPopupOpen(true)
        setSelectedCard(char)
    }

    const handlePopupClose = () => {
        setIsPopupOpen(false)
        setSelectedCard(null)
    }

    const fetchCharacters = useCallback(async () => {
        if (!hasMore || loadingRef.current || !currentPageUrl) return

        loadingRef.current = true
        setLoading(true)
        try {
            const response = await axios.get(currentPageUrl);
            if (response.status >= 400) {
                setError("Ошибка при загрузке данных");
                return
            }

            setCharacters(prev => [...prev, ...response?.data?.results ?? []])
            setDataCount(response.data.count)
            setCurrentPageUrl(response.data.next)

            if (!response.data.next) {
                setHasMore(false)
                setCurrentPageUrl('')
            }
        } catch {
            setError("Произошла ошибка при загрузке данных")
        } finally {
            setLoading(false)
            loadingRef.current = false
        }
    }, [currentPageUrl, hasMore])

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
                hasMore &&
                !loadingRef.current
            ) {
                fetchCharacters()
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [fetchCharacters, hasMore]);

    useEffect(() => {
        fetchCharacters()
    }, [])


    if (error) {
        return <Navigate to="/*" replace />
    }
    return (
        <section className="characters">
            <div className="characters__header">
                <p className="characters__language">language: {i18n.language}</p>
                <h2 className="characters__title">
                    {dataCount} <span className="characters__title-accent">{t("Peoples")}</span> {t("for you to choose your favorite")}
                </h2>
            </div>

            <button className="characters__lang-button" onClick={switchLanguage}></button>

            <Loader isLoading={loading}/>

            <FilterCard onChange={(sort: SetStateAction<string>) => setSelectedSort(sort)} />
            <CardList characters={characters} onCardClick={handlePopupOpen} color={selectedSort} />

            {selectedCard && (
                <CardPopup card={selectedCard} isPopupOpen={isPopupOpen} onClose={handlePopupClose} />
            )}
        </section>
    );
};

export default CharPage;