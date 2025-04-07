import {CardUtil} from "../../shared/utils/cardUtil.ts";
import male from "../../../public/images/male.png"
import female from "../../../public/images/female.png"
import alien from "../../../public/images/alien.png"
import {FC} from "react";
import {CardPopupProps} from "../../shared/types/character.ts";

const CardPopup: FC<CardPopupProps> = (props) => {

    const { card, isPopupOpen, onClose } = props

    function renderImage() {
        if (card.gender === 'male') {
            return male;
        }
        if (card.gender === 'female') {
            return female;
        }
        return alien;
    }

    return (
        <div className={`card-popup ${isPopupOpen ? 'card__popup_opened' : ''}`}>
            <div className="card-popup__container">
                <button className="card-popup__close-button" onClick={onClose} type="button" aria-label="Закрыть"/>
                <div className="card-popup__image-block">
                    <img className="card-popup__image" src={renderImage()} alt="icon"/>
                    <div className="card-popup__tags-container">
                        {CardUtil.isKnown(card.birth_year) && <div className="card--tag">
                            {card.birth_year}
                        </div>}
                        {CardUtil.isKnown(card.gender) && <div className="card--tag">
                            {card.gender}
                        </div>}
                    </div>
                </div>
                <div className="card-popup__info-block">
                    <h2 className="card-popup__title">{card.name}</h2>
                    <ul className="card-popup__additional-info">
                        {card.hair_color && card.hair_color !== 'n/a' && (
                            <li className="card-popup__additional-info-item">
                                Hair color:
                                {' '}
                                {card.hair_color}
                            </li>
                        )}
                        {card.skin_color && card.skin_color !== 'n/a' && (
                            <li className="card-popup__additional-info-item">
                                Skin color:
                                {' '}
                                {card.skin_color}
                            </li>
                        )}
                        {card.eye_color && card.eye_color !== 'n/a' && (
                            <li className="card-popup__additional-info-item">
                                Eye color:
                                {' '}
                                {card.eye_color}
                            </li>
                        )}
                    </ul>
                    <div className="card-popup__info-container">
                        {CardUtil.isKnown(card.height) && <div className="card__info--item">
                            <div className="card__info--value">{card.height}</div>
                            <span className="card__info--name">height</span>
                        </div>}
                        {CardUtil.isKnown(card.mass) && <div className="card__info--item">
                            <div className="card__info--value">{card.mass}</div>
                            <span className="card__info--name">mass</span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPopup;