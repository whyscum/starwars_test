import Card from "../card/Card.tsx";
import {FC} from "react";
import {CardListProps} from "../../shared/types/character.ts";

const CardList: FC<CardListProps> = props => {
    const {characters, onCardClick, color} = props

    const filterCards = () => {
        if (color.length === 0) {
            return characters
        } return characters.filter((char) => color == char.eye_color)
    }

    return (
        <section className="card-list">
            {filterCards().map((char) => (
                <Card char={char} key={char.url} onClick={onCardClick} />
            ))}
        </section>
    );
};

export default CardList;