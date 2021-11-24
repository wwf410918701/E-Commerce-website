import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './diretory.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectSections } from "../../redux/diretory/diretory.selectors";

const Diretory = ({sections}) => (
  <div className='diretory-menu'>
      {
          sections.map(({id, ...otherSectionProps}) => {
              return <MenuItem key={id} {...otherSectionProps}/>
          })
      }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Diretory);