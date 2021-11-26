import React from "react";
import { Group, FormInputContainer, FormInputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProperties}) => (
    <Group>
        <FormInputContainer onChange={handleChange} {...otherProperties} />
        {
            label ? (
                <FormInputLabel 
                    className={`${ otherProperties.value.length ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </FormInputLabel>
            ):null
        }
    </Group>
)

export default FormInput