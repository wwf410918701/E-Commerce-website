import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectSections } from "../../redux/diretory/diretory.selectors";
import { DiretoryMenuContainer } from "./diretory.styles";

const Diretory = ({sections}) => (
  <DiretoryMenuContainer>
      {
          sections.map(({id, ...otherSectionProps}) => {
              return <MenuItem key={id} {...otherSectionProps}/>
          })
      }
  </DiretoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Diretory);