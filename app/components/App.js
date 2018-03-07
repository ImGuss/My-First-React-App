const React = require('react');
const ReactDOM = require('react-dom');


// components
const Header = require('./header');
const Footer = require('./footer');


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Header />
        <Footer />
      </div>
    );
  }
}




module.exports = App;
