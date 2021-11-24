import CartItem from "../../components/cart-item/cart-item.component"

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id?
                {...cartItem, quantity: cartItem.quantity+1}
                :
                cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingItem.id)
    }
    return (
        cartItems.map(cartItem => cartItem.id === existingItem.id ? 
            {...cartItem, quantity: cartItem.quantity - 1}
            :
            cartItem
        )
    )
} 