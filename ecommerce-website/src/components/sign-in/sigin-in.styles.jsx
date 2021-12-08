import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 360px;
    }
`

export const SignInTitle = styled.div`
    margin: 10px 0; 
`
export const SignInButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`