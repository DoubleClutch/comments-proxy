import React from 'react';
import ReactDOM from 'react-dom';

import '../../dist/css/navbar.scss';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    console.log(document.getElementById('comments'));
    document.getElementById('comments').setAttribute('style', 'visibility: hidden')
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-item">Campaign</div>
        <div className="navbar-item">FAQ</div>
        <div className="navbar-item">Updates</div>
        <div className="navbar-item" onClick={this.handleclick}>Comments</div>
        <div className="navbar-item">Commuity</div>
      </div>
    );
  }
}

// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// window.Navbar = Navbar;
export default Navbar;
