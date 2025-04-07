import {FC} from "react";
import {FilterCardProps} from "../../shared/types/filterType.ts";
import {CharacterEyeColor} from "../../shared/enums/filterEnum.ts";

const FilterCard:FC<FilterCardProps> = ({onChange}) => {

    return (
            <select className="filter__menu" onChange={(e) => onChange(e.target.value)}>
                <option value="">{CharacterEyeColor.all}</option>
                <option value={CharacterEyeColor.brown}>{CharacterEyeColor.brown}</option>
                <option value={CharacterEyeColor.red}>{CharacterEyeColor.red}</option>
                <option value={CharacterEyeColor.blue}>{CharacterEyeColor.blue}</option>
                <option value={CharacterEyeColor.white}>{CharacterEyeColor.white}</option>
                <option value={CharacterEyeColor.gray}>{CharacterEyeColor.gray}</option>
            </select>
    );
};

export default FilterCard;