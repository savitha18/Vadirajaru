
import React, { Component } from 'react';
import HomePage from './HomePage';
import Burgermenu from './Burgermenu';
import ModalVideo from 'react-modal-video';
import './App.scss';
import archanaImg from './assets/leaf.svg';
import keertanaImg from './assets/music.svg';
import pravachanaImg from './assets/dhyana.png';
import aboutImg from './assets/about.svg';

class App extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      selectedItem: 'archane'
    }
    this.openModal = this.openModal.bind(this);
  }

  openModal () {
    this.setState({isOpen: true})
  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  render(){
    return (
      <div className="App">
        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.isMobileDevice() ? '8r7iE8qiTT4' : 'XDk49IMeDeE'} onClose={() => this.setState({isOpen: false})} />
        <div className="App-header">
          <div className="header-container">
          <div className="left-content-header">
            <div>Sri Vadirajo Vijayate</div>
            <div className="small-text">Chant the shloka to offer pushpa archane.</div>
            <div className="video-text" onClick={this.openModal}>Show me how?</div>
          </div>
          <div className="right-content-header">
                     <div className="box" onClick={() => this.setState({selectedItem: 'archane'})}>
                     <a href="#archane">
                          <img src={archanaImg} />
                          <div>Archane</div>
                          </a>
                     </div>
                     <div className="box" onClick={() => this.setState({selectedItem: 'keertane'})}>
                     <a href="#keertane">
                          <img src={keertanaImg} />
                          <div>Keertane</div>
                          </a>
                     </div>
                     <div className="box" onClick={() => this.setState({selectedItem: 'chintane'})}>
                     <a href="#chintane">
                          <img src={pravachanaImg} />
                          <div>Chintane</div></a>
                     </div>
                     <div className="box" onClick={() => this.setState({selectedItem: 'about'})}>
                     <a href="#about">
                          <img src={aboutImg} />
                          <div>About</div>
                          </a>
                     </div>
                 </div>
                 <div className="right-content-header-tablet">
                 <Burgermenu />
                 </div>
          </div>
          
        </div>
        
        <HomePage goTo={this.state.selectedItem} />
      </div>
    );
  }
  
}

export default App;
