import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RazorpayButton = () => {
  const navigate = useNavigate();
  const navigateto = useNavigate();

  useEffect(() => {
    // Load the Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: 'rzp_test_GkPt4QTyG6IJZr', // Replace with your test key id
        amount: Math.round(5000 * 100), // Amount in currency subunits. Default currency is INR.
        currency: 'INR',
        name: 'Suyash PVT LTD', // Your business name
        description: 'Motor lele bhai',
        image: 'https://example.com/your_logo', // Optional - replace with your logo URL
        prefill: { // We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: 'Suyash Tandale', // Your customer's name
          email: 'suyashtandale386@gmail.com',
          contact: '7715047507' // Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: 'black'
        },
        handler: (response) => {
          onPaymentSuccess(response.razorpay_payment_id);
        },
        modal: {
          ondismiss: () => {
            onPaymentError();
          }
        }
      };

      const rzp1 = new window.Razorpay(options);

      document.getElementById('rzp-button1').onclick = function(e) {
        rzp1.open();
        e.preventDefault();
      };

      rzp1.on('payment.failed', (response) => {
        onPaymentError(response.error.code, response.error.description);
      });
    };
  });

  const onPaymentSuccess = (paymentTransactionId) => {
    console.log('Payment successful', paymentTransactionId);
    alert('Payment successful');

    // Navigate to PreDeliveryActivity with success flags and transaction ID
    navigate('/pre-delivery', { // Adjust the path as necessary
      state: {
        isPaymentSuccessful: true,
        paymentTransactionId: paymentTransactionId,
      },
    });
  };

  const onPaymentError = (code, description) => {
    console.error(`Payment error: ${code} ---------- ${description}`);
    alert('Payment error');
    navigateto('/products')
  };

  return <button id="rzp-button1">Pay</button>;
};

export default RazorpayButton;

