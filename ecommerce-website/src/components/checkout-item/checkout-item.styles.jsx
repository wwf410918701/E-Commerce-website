import styled from 'styled-components';

export const CheckOutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`
export const CheckOutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`
export const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
`
export const PriceNameContainer = styled.span`
    width: 23%;
`
export const QuantityContainer = styled.span`
    width: 23%;
    display: flex;
`
export const Arrow = styled.span`
    cursor: pointer;
`
export const Value = styled.span`
    margin: 0 10px;
`
export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`