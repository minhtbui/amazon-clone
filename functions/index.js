const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
   'sk_test_51HQx2sGjieoPvok2aWP4fW7O5p11gKIj2podrnUXY2lQbhqDhxeHNsSXzturWmCkVVZEzt5jm6ayGK9QUpQTZhqW00kdE0R60j',
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hey'));

app.post('/payments/create', async (request, response) => {
   const total = request.query.total;

   console.log('Payment request recieved >>> ', total);
   const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
   });

   // 201 OK - created
   response.status(201).send({
      clientSecret: paymentIntent.client_secret,
   });
});

// Listen command
exports.api = functions.https.onRequest(app);

// local api endpoint
// http://localhost:5001/clone-project-a3066/us-central1/api
