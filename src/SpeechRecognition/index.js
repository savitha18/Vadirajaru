import './index.scss';
import React, { Component } from 'react';
import plainMicImg from '../assets/plainmic.svg';
import micImg from '../assets/mic.svg';

const SpeechRecognition = window ? (window.webkitSpeechRecognition || window.SpeechRecognition) : null;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;
if(recognition){
  recognition.continous = true
  recognition.interimResults = true
  recognition.lang = 'hi-IN'
}


class Speech extends Component {

    constructor(props) {
      super(props);
      this.state = {
        listening: false
      }
      this.toggleListen = this.toggleListen.bind(this)
      this.handleListen = this.handleListen.bind(this)
    }
  
    toggleListen() {
      this.setState({
        listening: !this.state.listening
      }, this.handleListen)
    }
  
    handleListen() {
  
      console.log('listening?', this.state.listening)
  
      if (this.state.listening) {
        recognition.start()
        recognition.onend = () => {
          console.log("...continue listening...")
          recognition.start()
        }
  
      } else {
        recognition.stop()
        recognition.onend = () => {
          console.log("Stopped listening per click")
        }
      }
  
      recognition.onstart = () => {
        console.log("Listening!")
      }
  
      let finalTranscript = ''
      recognition.onresult = event => {
        let interimTranscript = ''
  
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalTranscript += transcript + ' ';
          else interimTranscript += transcript;
        }
        if(finalTranscript.indexOf('बंदे') > 0 
        || finalTranscript.indexOf('वंदे') > 0
        || finalTranscript.indexOf('दया') > 0
        || finalTranscript.indexOf('दया') > 0
        || finalTranscript.indexOf('हयग्रीवा') > 0  
        || finalTranscript.indexOf('राजगुरु') > 0               
        ){
            console.log('shloka');
            this.props.onComplete();
            
        }
  
      //-------------------------COMMANDS------------------------------------
  
        const transcriptArr = finalTranscript.split(' ')
        const stopCmd = transcriptArr.slice(-3, -1)
        console.log('stopCmd', stopCmd)
        finalTranscript = '';
        
  
        if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
          recognition.stop()
          recognition.onend = () => {
            console.log('Stopped listening per command')
            const finalText = transcriptArr.slice(0, -3).join(' ');
            
          }
        }
      }
      
    //-----------------------------------------------------------------------
      
      recognition.onerror = event => {
        console.log("Error occurred in recognition: " + event.error)
      }
  
    }
  
    render() {
      return (
        <div style={container}>
          {/*<div id='microphone-btn' style={button} onClick={this.toggleListen} >*/}
              <img className={this.state.listening ? 'recording' : ''} style={mic} src={micImg} onClick={this.toggleListen} />
          {/*</div>*/}
         {/*  <div id='interim' style={interim}></div>
          <div id='final' style={final}></div>*/}
        </div>
      )
    }
  }
  
  
  export default Speech;

  const styles = {
    container: {
      width: '50px',
      display: 'inline',
    },
    button: {
      width: '20px',
      height: '20px',
      background: 'lightblue',
      borderRadius: '50%',
      padding: '10px',
    },
    interim: {
      color: 'gray',
      border: '#ccc 1px solid',
      padding: '1em',
      margin: '1em',
      width: '300px'
    },
    final: {
      color: 'black',
      border: '#ccc 1px solid',
      padding: '1em',
      margin: '1em',
      width: '300px'
    },
    mic: {
        width: '45px'
    }
  }
  
  const { container, button, interim, final, mic } = styles;