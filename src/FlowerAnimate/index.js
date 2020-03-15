import './index.scss';
import React, { Component } from 'react';
import purpleFlowerImg from '../assets/purple.svg';

class FlowerAnimate extends Component{
    
    render(){
        const {count} = this.props;
        return(
            <div>
            {(count >= 1) && <div className="flower-animate-container flower-animate-container1">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 2) && <div className="flower-animate-container flower-animate-container3">
                <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>          
            </div>}
            {(count >= 3) && <div className="flower-animate-container flower-animate-container2">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 4) && <div className="flower-animate-container flower-animate-container5">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>         
            </div>}
            {(count >= 5) && <div className="flower-animate-container flower-animate-container4">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 6) && <div className="flower-animate-container flower-animate-container6">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>           
            </div>}
            {(count >= 7) && <div className="flower-animate-container flower-animate-container7">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 8) && <div className="flower-animate-container flower-animate-container8">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>           
            </div>}
            {(count >= 9) && <div className="flower-animate-container flower-animate-container9">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            

            {/*/10-20*/}
            {(count >= 11) && <div className="flower-animate-container fives flower-animate-container11">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 12) && <div className="flower-animate-container fives flower-animate-container12">
                <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>          
            </div>}
            {(count >= 13) && <div className="flower-animate-container fives flower-animate-container13">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 14) && <div className="flower-animate-container fives flower-animate-container14">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>         
            </div>}
            {(count >= 15) && <div className="flower-animate-container fives flower-animate-container15">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 16) && <div className="flower-animate-container fives flower-animate-container16">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>           
            </div>}
            {(count >= 17) && <div className="flower-animate-container fives flower-animate-container17">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 18) && <div className="flower-animate-container fives flower-animate-container18">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>           
            </div>}
            {(count >= 19) && <div className="flower-animate-container flower-animate-container19">
                <div className="dropletA" id="no1A"></div>
                <div className="dropletA" id="no2A"></div>
                <div className="dropletA" id="no3A"></div>
                <div className="dropletA" id="no4A"></div>
                <div className="dropletA" id="no5A"></div>
                <div className="dropletA" id="no6A"></div>
                <div className="dropletA" id="no7A"></div>
                <div className="dropletA" id="no8A"></div>
                <div className="dropletA" id="no9A"></div>
                <div className="dropletA" id="no10A"></div>          
            </div>}
            {(count >= 20) && <div className="flower-animate-container flower-animate-container20">
            <div className="dropletB" id="no1B"></div>
                <div className="dropletB" id="no2B"></div>
                <div className="dropletB" id="no3B"></div>
                <div className="dropletB" id="no4B"></div>
                <div className="dropletB" id="no5B"></div>
                <div className="dropletB" id="no6B"></div>
                <div className="dropletB" id="no7B"></div>
                <div className="dropletB" id="no8B"></div>
                <div className="dropletB" id="no9B"></div>
                <div className="dropletB" id="no10B"></div>         
            </div>}

            {(count >= 21) && <div className="flower-animate-container flower-animate-container21">
            <div className="dalaB" id="tulsi5B"></div>
                <div className="dalaB" id="tulsi3B"></div>       
            </div>}

            {(count >= 10) && <div className="flower-animate-container flower-animate-container10">
            <div className="dalaB" id="tulsi5B"></div>
                <div className="dalaB" id="tulsi3B"></div>       
            </div>}

            {(count >= 22) && <div className="flower-animate-container flower-animate-container22">
            <div className="dalaB" id="tulsi5B"></div>
                <div className="dalaB" id="tulsi3B"></div>       
            </div>}
            {(count >= 23) && <div className="flower-animate-container flower-animate-container23">
            <div className="dalaB" id="tulsi5B"></div>
                <div className="dalaB" id="tulsi3B"></div>       
            </div>}
            {(count >= 24) && <div className="flower-animate-container flower-animate-container24">
            <div className="dalaB" id="tulsi5B"></div>
                <div className="dalaB" id="tulsi3B"></div>       
            </div>}
            </div>
           
        );
    }
}

export default FlowerAnimate;