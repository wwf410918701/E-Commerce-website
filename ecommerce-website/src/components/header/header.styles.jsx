import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 22px 25px 25px 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`

export const OptionsCollection = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px && min-width: 600px) {
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        width: 80%;
        margin-left: auto;
    }
`

export const OptionContainer = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    font-size: larger;
    @media screen and ( max-width: 600px ){
        padding: 5px 5px;
        font-size: 10px;
    }
`