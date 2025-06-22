'use client'
import { createPaymentIntent, updatePaymentIntent } from '@/app/requests'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from './PaymentForm'
const stripePromise = loadStripe('')

export const CheckOutFlow = () => {
    const [stripeClientSecret, setStripeClientSecret] = useState<null | string>(null)
    const [currency, setCurrency] = useState<string>('usd')

    const handleClickOnCurrency = async (e: ChangeEvent<HTMLSelectElement>) => {
        const paymentIntentId: null | string = localStorage.getItem('paymentIntentId')!
        if (paymentIntentId) {
            const { clientSecret } = await updatePaymentIntent(paymentIntentId, e.target.value)
            setStripeClientSecret(clientSecret)
            setCurrency(e.target.value)
        }
    }
    useEffect(() => {
        const initClientSecret = async () => {

            const paymentIntentId: null | string = localStorage.getItem('paymentIntentId')
            if (paymentIntentId) {
                const { clientSecret } = await updatePaymentIntent(paymentIntentId, 'usd')
                setStripeClientSecret(clientSecret)
            } else {
                const { clientSecret, paymentIntentId } = await createPaymentIntent('usd')
                setStripeClientSecret(clientSecret)
                localStorage.setItem('paymentIntentId', paymentIntentId)
            }
        }
        initClientSecret()
    }, [])
    return (
        <div className='justify-items-center pt-20'>
            {
                stripeClientSecret &&
                <>
                    <select name="" id="" onChange={handleClickOnCurrency}>
                        <option value="usd">USD</option>
                        <option value="mxn">MXN</option>
                        <option value="eur">EUR</option>
                        <option value="cop">COP</option>
                    </select>
                    <Elements key={currency} stripe={stripePromise} options={{ clientSecret: stripeClientSecret }}>
                        <PaymentForm />
                    </Elements>
                </>
            }
        </div>
    )
}
