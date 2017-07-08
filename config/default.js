module.exports = {
  port: 3000,
  session: {
    secret: 'spider',
    key: 'spider',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:12345/spider'
};