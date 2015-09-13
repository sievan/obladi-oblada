import UserStore from '../stores/UserStore';

export default {
  addPaymentMethod(nounce) {
    console.log("do payment", nounce);

    return new Promise(() => {
      fetch(UserStore.baseUrl() + '/braintree/add_paytment_method', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nounce: nounce,
          userId: 1
        })
      });
    });
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
