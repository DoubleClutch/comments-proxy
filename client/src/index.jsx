import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar';

import '../dist/css/main.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'campaign',
    };
  }

  handleclick(status) {
    this.setState({
      status: status,
    });
  }

  renderComponent(status) {
    console.log('this: ' + status);
    switch (status) {
      case 'campaign':
        return <AboutContainer idFromURL={window.location.pathname.slice(1, window.location.pathname.length - 1)}/>;
        break;
      case 'updates':
        return <Updates ID={window.location.pathname.slice(1, window.location.pathname.length - 1)}/>;
        break;
      case 'comments':
        return <Comments id={window.location.pathname.slice(1, window.location.pathname.length - 1)}/>;
        break;
      default:
        return '<div>Still working...</div>'
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <nav className="main-nav">
            <div className="basic-nav">
              <span className="nav-button">Explore</span>
              <span className="nav-button">Start a project</span>
            </div>
            <div className="logo-container">
              <img className='logo' src="./images/logoResized.png" />
            </div>
            <div className="search-box">
              <span className="nav-button search">Search</span>
              <span className="nav-button sign-in">Sign-In</span>
            </div>
          </nav>
        </header>
        <section id="campaign-title" className="campaign-title">
          <CampaignHeader idFromURL={window.location.pathname.slice(1, window.location.pathname.length - 1)} />
        </section>
        <section className="video-player-container">
          <div className="campaign-video">
            <VideoPlayer idFromURL={window.location.pathname.slice(1, window.location.pathname.length - 1)} />
          </div>
          <div id="pledge-info" class="pledge-info">
            <PledgeInfo id={window.location.pathname.slice(1, window.location.pathname.length - 1)} />
          </div>
        </section>
        <section>
          <div className="navbar">
            <div className="navbar-item" onClick={this.handleclick.bind(this, 'campaign')}>Campaign</div>
            <div className="navbar-item">FAQ</div>
            <div className="navbar-item" onClick={this.handleclick.bind(this, 'updates')}>Updates</div>
            <div className="navbar-item" onClick={this.handleclick.bind(this, 'comments')}>Comments</div>
            <div className="navbar-item">Commuity</div>
          </div>
        </section>
        <section className="project-display">
          <div className="project-info">
            {this.renderComponent(this.state.status)}
          </div>
          <div id="pledge-support" className="pledge">
            <PledgeSupport id={window.location.pathname.slice(1, window.location.pathname.length - 1)} />
          </div>
        </section>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('apps'));
window.App = App;
window.Navbar = Navbar;
