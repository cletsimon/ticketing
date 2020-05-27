// fix file detection on next js
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions.poll = 300;
    return config;
  }
};
