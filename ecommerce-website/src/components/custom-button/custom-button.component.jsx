import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSigin,...otherProps}) => (
    <button className={`${isGoogleSigin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;