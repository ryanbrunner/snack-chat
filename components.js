const React = require('react');
const Snack = require('./compiled/snack').default;
const ReactDOMServer = require('react-dom/server');

module.exports = {
  snack: function(props) {
    return ReactDOMServer.renderToString(React.createElement(Snack, props));
  }
}