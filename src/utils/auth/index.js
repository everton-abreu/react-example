module.exports = {
  isAuthenticated: () => {
    const token = localStorage.getItem('x-access-token');

    return !!(token);
  },
};
