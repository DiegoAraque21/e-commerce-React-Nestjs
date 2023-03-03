import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Total } from './total.interface';

@Injectable({})
export class TransactionService {
  async postTransaction(body: Total) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-11-15',
    });
    const { total } = body;
    const totalCents = +(total * 100).toFixed(2);
    // create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCents,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      ms: 'Succesfull petition',
      clientSecret: paymentIntent.client_secret,
    };
  }
}
