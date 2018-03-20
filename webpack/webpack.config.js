const config = global.process.env.NODE_ENV === 'production' ? 
  require('./prod.webpack.config') : 
  require('./dev.webpack.config');


module.exports = {
  ...config
}