import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Paypal Clone/Body';
import Head from 'next/head';

export default function PaypalClone() {
    return (
        <>
            <Head>
                <title>Secure & Instant Digital Payments | UPI, ePayments & AEPS Services</title>
                <meta name="description" content="Experience seamless digital transactions with UPI payments, ePayments, AEPS services, and instant payment solutions. Explore secure electronic payment systems today." />
                <meta name="keywords" content="paypal, pay pal, upi payment, epayments, upi pay, positive pay system, aeps service, epay payment, instant payment, electronic payment system" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Secure & Instant Digital Payments | UPI, ePayments & AEPS Services"
                description="Experience seamless digital transactions with UPI payments, ePayments, AEPS services, and instant payment solutions. Explore secure electronic payment systems today."
            />
            <Body />
        </>
    )
}
