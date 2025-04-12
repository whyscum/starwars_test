import {FC} from "react";
import {CardUtil} from "../../shared/utils/cardUtil.ts";
import {CardProps} from "../../shared/types/character.ts";

const Card: FC<CardProps> = props => {
    const {char, onClick} = props

    const handleClick = () => {
        onClick(char)
    }

    function color() {
        if (char.gender === 'male') {
            return "#73D677"
        }
        if (char.gender === 'female') {
            return "#C956FF"
        }
        return "#F5DB13"
    }

    return (
        <div className="card" role="button" onClick={handleClick}>
            {CardUtil.isKnown(char.name) && <h3 className="card__title">{char.name}</h3>}

            <div className="card__info-container">
                {CardUtil.isKnown(char.height) && (
                    <div className="card__info-item">
                        <div className="card__info-value">{char.height}</div>
                        <span className="card__info-name">height</span>
                    </div>
                )}
                {CardUtil.isKnown(char.mass) && (
                    <div className="card__info-item">
                        <div className="card__info-value">{char.mass}</div>
                        <span className="card__info-name">mass</span>
                    </div>
                )}
            </div>

            <div className="card__tags-container">
                {CardUtil.isKnown(char.birth_year) && <div className="card__tag" style={{ backgroundColor: "#07D6F2" }}>{char.birth_year}</div>}
                {CardUtil.isKnown(char.gender) && <div className="card__tag" style={{ backgroundColor: `${color()}` }}>{char.gender}</div>}
            </div>
        </div>
    );
};

export default Card;