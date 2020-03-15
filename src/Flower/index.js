import './index.scss';
import React, { Component } from 'react';

class Flower extends Component{
    render(){
        return(
            <div className="flower-container">
                <div className="droplet" id="no1"></div>
                <div className="droplet" id="no2"></div>
                <div className="droplet" id="no3"></div>
                <div className="droplet" id="no4"></div>
                <div className="droplet" id="no5"></div>
                <div className="droplet" id="no6"></div>
                <div className="droplet" id="no7"></div>
                <div className="droplet" id="no8"></div>
                <div className="droplet" id="no9"></div>
                <div className="droplet" id="no10"></div>           
            </div>
        );
    }
}

export default Flower;