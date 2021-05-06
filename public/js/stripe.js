/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const stripe = Stripe('pk_test_BUkd0ZXAj6m0q0jMyRgBxNns00PPtgvjjr');

export const bookTour = async tourId => {
  try {
    console.log('reach');
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/bookings',
      data: {
        tourId
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Bookking successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
