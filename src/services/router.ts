export const apiRoutes = {
  // Authentication
  login: { method: 'POST', uri: '/user/login' },
  activateAccount: { method: 'PUT', uri: '/client/:id/verify' },
  refreshLogin: { method: 'POST', uri: '/user/token' },
  logout: {
    method: 'POST',
    uri: '/user/logout',
  },

  // miscellaneous
  getCep: { method: 'GET', uri: '/:cep/json/' },


} as const;
