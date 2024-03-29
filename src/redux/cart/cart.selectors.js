import { createSelector } from 'reselect'

const selectCart = state => state.cart  //This is an input selector

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
        (accumulatedValue, cartItem) => {
        return accumulatedValue + cartItem.quantity
    }, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
        (accumulatedValue, cartItem) => {
        return accumulatedValue + cartItem.quantity * cartItem.price
    }, 0)
)