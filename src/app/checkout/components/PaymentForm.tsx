'use client'
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@mui/material'
import useCart from '@/app/hooks/useCart'
export const PaymentForm = () => {
    const {dispatch,REDUCER_ACTIONS} = useCart()
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const stripe = useStripe();
    const elements = useElements();
    const hanldeClickOnPay = async () => {
        if (!stripe || !elements) return
        setIsLoading(true)
        const { error } = await stripe.confirmPayment({
            elements, redirect: 'if_required', confirmParams: {
                return_url: 'http://localhost:3000?payment_intent='
            }
        })
        if (error) {
            setErrorMsg(error.message ?? 'Unkown error')
        } else {
            dispatch({ type: REDUCER_ACTIONS.SUBMIT })
            localStorage.removeItem('paymentIntentId')
        }
        setIsLoading(false)
    }
    return (
        <div className='flex flex-col  gap-4 w-full'>
            <PaymentElement />
            <Button variant="contained" color="secondary" fullWidth onClick={hanldeClickOnPay} loading={isLoading}>
                {isLoading ? 'Procesando Pago' : 'Pagar'}
            </Button>

            {errorMsg && <span>{errorMsg}</span>}
        </div>
    )
}
