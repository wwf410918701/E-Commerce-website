import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { selectSections } from "../../redux/diretory/diretory.selectors";
import { DiretoryMenuContainer } from "./diretory.styles";

const Diretory = () => {
  const sections = useSelector(selectSections);
  return (
    <DiretoryMenuContainer>
        {
            sections.map(({id, ...otherSectionProps}) => {
                return <MenuItem key={id} {...otherSectionProps}/>
            })
        }
    </DiretoryMenuContainer>
  )
}

export default Diretory;