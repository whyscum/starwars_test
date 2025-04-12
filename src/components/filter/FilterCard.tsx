import {FC} from "react";
import {FilterCardProps} from "../../shared/types/filterType.ts";
import {CharacterEyeColor} from "../../shared/enums/filterEnum.ts";

const FilterCard:FC<FilterCardProps> = ({onChange}) => {

    return (
        <div className="select">
            <label className="select__label">
                color eye
                <select className="select__menu" onChange={(e) => onChange(e.target.value)}>
                    <option value="">{CharacterEyeColor.all}</option>
                    <option value={CharacterEyeColor.brown}>{CharacterEyeColor.brown}</option>
                    <option value={CharacterEyeColor.red}>{CharacterEyeColor.red}</option>
                    <option value={CharacterEyeColor.blue}>{CharacterEyeColor.blue}</option>
                    <option value={CharacterEyeColor.white}>{CharacterEyeColor.white}</option>
                    <option value={CharacterEyeColor.gray}>{CharacterEyeColor.gray}</option>
                    <option value={CharacterEyeColor.yellow}>{CharacterEyeColor.yellow}</option>
                </select>
            </label>
        </div>
    );
};

export default FilterCard;