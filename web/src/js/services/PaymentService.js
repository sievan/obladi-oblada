import UserStore from '../stores/UserStore';

export default {
  doPayment(nounce) {
    console.log("do payment", nounce);

    /*fetch('http://localhost:3000/addPaymentOptions', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nounce: nounce,
        userId: 1
      })
    }*/
  },

  getClientToken() {
    return fetch(UserStore.baseUrl() + '/braintree/client_token.json', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }
}
