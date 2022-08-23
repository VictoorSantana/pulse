export const environment = {
  production: true,
  baseUrl: 'https://pulse-bank-api-test.herokuapp.com',
  routes: {
    auth: {
      login: '/auth/login'
    },
    users: {
      base: '/users'
    },
    account: {
      base: '/account',
      statement: '/account/statement',
      transfer: '/account/transfer'
    }
  }
};
