const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');


if (process.env.NODE_ENV!='production') {require('dotenv').config()}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000;

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'ecommerce-website/build')))
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'ecommerce-website/build', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port)
})

app.post("/payment", (req, res) => {
    stripe.customers
      .create({
        email: req.body.email, // customer email, which user need to enter while making payment
        source: req.body.token.id // token for the given card
      })
      .then(customer =>
        stripe.charges.create({
          // charge the customer
          amount: req.body.amount,
          description: "Sample Charge",
          currency: "usd",
          customer: customer.id
        })
      )
      .then(charge => res.status(200).send({ success: "success" }))
      .catch(stripeErr => res.status(500).send({ error: stripeErr }));
  });
