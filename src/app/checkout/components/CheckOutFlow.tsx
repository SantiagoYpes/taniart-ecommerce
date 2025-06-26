'use client'
import { createPaymentIntent, updatePaymentIntent } from '@/app/requests'
import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from './PaymentForm'
import { Select, MenuItem, InputLabel, SelectChangeEvent, FormControl, Typography } from '@mui/material'

const PUBLISH_KEY: string = process.env.PUBLISH_KEY!
const stripePromise = loadStripe('')

export const CheckOutFlow = () => {
    console.log(PUBLISH_KEY)
    const [stripeClientSecret, setStripeClientSecret] = useState<null | string>(null)
    const [currency, setCurrency] = useState<string>('usd')

    const handleClickOnCurrency = async (e: SelectChangeEvent) => {
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
        <div className='w-full justify-items-center p-5'>
            {
                stripeClientSecret &&
                <div className='flex flex-col items-center w-full gap-4'>
                    <Typography color="secondary" variant='h4' component="span">Tipo de Pago</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            label="Currency"
                            onChange={handleClickOnCurrency}
                        >
                            <MenuItem value="usd">USD</MenuItem>
                            <MenuItem value="mxn">MXN</MenuItem>
                            <MenuItem value="eur">EUR</MenuItem>
                            <MenuItem value="cop">COP</MenuItem>
                        </Select>

                    </FormControl>
                    <Elements key={currency} stripe={stripePromise} options={{ clientSecret: stripeClientSecret }}>
                        <PaymentForm />
                    </Elements>
                </div>
            }
        </div>
    )
}
