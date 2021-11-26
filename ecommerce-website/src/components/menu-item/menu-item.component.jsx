import React from "react";
import {withRouter} from 'react-router-dom'
import { MenuItemContainer, MenuItemBackGroundImage , MenuItemContent, MenuItemTitle, MenuItemSubTitle } from "./menu-item.styles";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <MenuItemContainer className = {`${size}`} onClick={() => history.push(linkUrl)}>
        <MenuItemBackGroundImage
            image = {imageUrl}
            className='background-image'
        />
        <MenuItemContent className='content'>
            <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
            <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
        </MenuItemContent>
    </MenuItemContainer>
);

export default withRouter(MenuItem);