export interface Character {
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    name?: string;
    height?: string;
    mass?: string;
    birth_year?: string;
    gender?: string;
    url?: string;
}

export type CardProps = {
    char: Character,
    onClick:(char: Character) => void
}

export type CardListProps = {
    characters: Character[],
    onCardClick:(char: Character) => void
    color: string
}

export interface CardPopupProps {
    card: Character,
    isPopupOpen: boolean,
    onClose: () => void
}