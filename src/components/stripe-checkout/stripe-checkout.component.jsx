import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IizExSCsoJIFyeNQnQ2P7ZbYxoM925zUR7TuQ2ZHyB8CCTA9j6fARDlwYtegGbMHDL02dgCMREGu3ZBTQkllt4p00aNY9rv5N'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton