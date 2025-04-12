import {CardUtil} from "../../shared/utils/cardUtil.ts";
import male from "../../../public/images/male.png"
import female from "../../../public/images/female.png"
import alien from "../../../public/images/alien.png"
import {FC} from "react";
import {CardPopupProps} from "../../shared/types/character.ts";

const CardPopup: FC<CardPopupProps> = (props) => {
    const { card, isPopupOpen, onClose } = props

    function selectedImage() {
        if (card.gender === 'male') {
            return male
        }
        if (card.gender === 'female') {
            return female
        }
        return alien
    }

    function color() {
        if (card.gender === 'male') {
            return "#73D677"
        }
        if (card.gender === 'female') {
            return "#C956FF"
        }
        return "#F5DB13"
    }

    return (
        <div className={`card-popup ${isPopupOpen ? 'card-popup__opened' : ''}`}>
            <div className="card-popup__container">
                <button className="card-popup__close" onClick={onClose} type="button" aria-label="Close" />
                <div className="card-popup__image-block">
                    <img className="card-popup__image" src={selectedImage()} alt="Character icon" />
                    <div className="card-popup__tags">
                        {CardUtil.isKnown(card.birth_year) && <div className="card__tag" style={{ backgroundColor: "#07D6F2" }}>{card.birth_year}</div>}
                        {CardUtil.isKnown(card.gender) && <div className="card__tag" style={{ backgroundColor: `${color()}` }}>{card.gender}</div>}
                    </div>
                </div>
                <div className="card-popup__info-block">
                    <h2 className="card-popup__title">{card.name}</h2>
                    <ul className="card-popup__details">
                        {CardUtil.isKnown(card.hair_color) && <li className="card-popup__details-item">Hair color: {card.hair_color}</li>}
                        {CardUtil.isKnown(card.skin_color) && <li className="card-popup__details-item">Skin color: {card.skin_color}</li>}
                        {CardUtil.isKnown(card.eye_color) && <li className="card-popup__details-item">Eye color: {card.eye_color}</li>}
                    </ul>
                    <div className="card-popup__metrics">
                        {CardUtil.isKnown(card.height) && (
                            <div className="card-popup__info--item">
                                <div className="card__info-value">{card.height}</div>
                                <span className="card__info-name">height</span>
                            </div>
                        )}
                        {CardUtil.isKnown(card.mass) && (
                            <div className="card-popup__info--item">
                                <div className="card__info-value">{card.mass}</div>
                                <span className="card__info-name">mass</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CardPopup;