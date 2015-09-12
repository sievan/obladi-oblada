import UserStore  from '../stores/UserStore';

export default {
  loginUrl(token) {
    return '' + UserStore.baseUrl() + '/login?token=' + token + '&callback=http://localhost:8080'
  },

  verifyUrl(token) {
    return '' + UserStore.baseUrl() + '/sessions/verify/' + token
  },

  profileUrl(token) {
    return '' + UserStore.baseUrl() + '/profile/?token='+token ;
  },

  getSignupToken(token) {
    fetch(this.verifyUrl(token), {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    })
    .then( (res) => {
      console.log(res);
      var token = res.token;
      UserStore.setToken(token);
    }).catch( (err) => {
      console.log("err", err);
    });
  },

  getCurrentUser(token) {
    return new Promise(
      fetch(this.profileUrl(token), {
        method: 'get',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then( (res) => {
        return res.json();
      })
    )
  }
}
