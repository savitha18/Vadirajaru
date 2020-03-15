import './index.scss';
import React, { Component, createRef } from 'react';
import Speech from '../SpeechRecognition';
import Flower from '../Flower';
import FlowerAnimate from '../FlowerAnimate';
import files from './files';
import vrindavanaImg from '../assets/vrindavana1.png';
import vrindavanaMImg from '../assets/vrindavana3.png';
import vadirajaruImg from '../assets/vadirajaidol1.gif';
import arrowImg from '../assets/down.svg';
import hayagreevaImg from '../assets/hayagreeva.png';
import playImg from '../assets/play.svg';


class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 24,
            serverCount: 0,
            shlokaText: 'english',
            firstTime: true,
            chintaneAudioSource:'',
            keertaneAudioSource:'',

        }
        setTimeout(() => this.setState({ count: 0}), 7000);
    }

    getEngligh(){
        return(
            <div className="engligh">tapo vidyaa viraktyaadi sadguNou ghaa karaanaham<br/>vaadiraaja gurum vande hayagreeva dayaashrayaan</div>
        );
    }

    getSanskrit(){
        return(
            <div className="sanskrit">तपो विद्या विरक्त्यादि सद्गुणो घा करानहम् |<br/>वादिराज गुरुं वन्दे हयग्रीव दयाश्रयान् ||</div>
        );
    }

    getKannada(){
        return(
            <div className="kannada">ತಪೋ ವಿದ್ಯಾ ವಿರಾಕ್ತ್ಯಾದಿ ಸದ್ಗುನೌ ಘಾಕರಾನಹಮ್ ।<br/>ವಾದಿರಾಜ ಗುರುಮ್ ವಂದೇ ಹಯಗ್ರೀವ ದಯಾಶ್ರಯಾನ್ ।।</div>
        );
    }

    render(){
        let { count, shlokaText, chintaneAudioSource, keertaneAudioSource } = this.state;
        console.log('chintane: ', chintaneAudioSource);
        return(
            <div className="container">
                <div className="desktop-container" id="archane">
                <div className="main-content">
                    <img className="bgImg" src={vrindavanaImg} />
                    <div className="overlay"></div>
                    <div className="window">
                        <img className="windowImg" src={vrindavanaImg} />
                    </div>
                <div className="archane">
                    <img className="hayagreeva" src={hayagreevaImg} />
                    <img className="rajaru" src={vadirajaruImg} />
                </div>

                <FlowerAnimate count={this.state.count} />
                </div>
               
               <div className="right-content">
                   <div className="box">
                       <div className="box-content">
                           <div className="action">Click</div>
                            <div className="direction">Click the mic &nbsp; &nbsp;<Speech onComplete={() => this.setState({ count: ++count, serverCount: count } )} /> &nbsp;&nbsp; button.
                            <marquee behavior="scroll" direction="left">Note: Do speak close to your mic so the voice recognition software can pick up your words.</marquee>
                             </div>
                            
                       </div>
                   </div>
                   <div className="arrow-holder">
                       <img src={arrowImg} />
                   </div>
                   <div className="box">
                    <div className="box-content">
                    <div className="action">Chant</div>
                       <div className="direction">
                       {shlokaText === 'english' && this.getEngligh()}
                       {shlokaText === 'sanskrit' && this.getSanskrit()}
                       {shlokaText === 'kannada' && this.getKannada()}
                       <div className="languages">
                           <span onClick={() => this.setState({ shlokaText: 'english' })}>English</span>
                           <span onClick={() => this.setState({ shlokaText: 'kannada' })}>ಕನ್ನಡ</span>
                           <span onClick={() => this.setState({ shlokaText: 'sanskrit' })}>संस्कृत</span></div>
                       </div>
                    </div>
                       

                   </div>
                   <div className="arrow-holder">
                       <img src={arrowImg} />
                   </div>
                   <div className="box">
                        <div className="box-content">
                            <div className="action">Samarpane</div>
                            <div className="direction">Watch pushpa archane to Gururaajaru<br/>
                                <Flower />
                                <div className="count-box">
                                    <div className="counter">
                                        Your Archane
                                    </div>
                                    <div className="digit">{this.state.serverCount}</div>
                                </div> 
                            </div>
                        </div>            
                   </div>
               </div>
               <div className="right-content-tablet">
                   <div className="content-container">
                   <div className="box">
                       <div className="box-content">
                           <div className="action">Click</div>
                            <div className="direction">Click the mic &nbsp; &nbsp;<Speech onComplete={() => this.setState({ count: ++count, serverCount: count } )} /> &nbsp;&nbsp; button.</div>
                            <marquee behavior="scroll" direction="left">Note: Do speak close to your mic so the voice recognition software can pick up your words.</marquee>
                       </div>
                   </div>
                   <div className="box">
                    <div className="box-content">
                    <div className="action">Chant</div>
                    <div className="direction">
                       {shlokaText === 'english' && this.getEngligh()}
                       {shlokaText === 'sanskrit' && this.getSanskrit()}
                       {shlokaText === 'kannada' && this.getKannada()}
                       <div className="languages">
                           <span onClick={() => this.setState({ shlokaText: 'english' })}>English</span>
                           <span onClick={() => this.setState({ shlokaText: 'kannada' })}>ಕನ್ನಡ</span>
                           <span onClick={() => this.setState({ shlokaText: 'sanskrit' })}>संस्कृत</span></div>
                       </div>
                    </div>
                       

                   </div>
                   <div className="box">
                        <div className="box-content">
                            <div className="action">Samarpane</div>
                            <div className="direction">
                                <div className="count-box">
                                    <div className="counter">
                                        Your Archane
                                    </div>
                                    <div className="digit">{this.state.serverCount}</div>
                                </div> 
                            </div>
                        </div>            
                   </div>
               </div>
               </div>
            </div>
            
            <div className="mobile-container" id="archane">

            <div className="main-content">
                <img className="bgImg" src={vrindavanaMImg} /> 
                <div className="archane">
                <img className="hayagreeva" src={hayagreevaImg} />
                    <img className="rajaru" src={vadirajaruImg} />
                </div>
                <FlowerAnimate count={this.state.count} />
            </div>
            <div className="right-content">
                   <div className="box">
                       <div className="box-content">
                           <div className="action">Click</div>
                            <div className="direction"><Speech onComplete={() => this.setState({ count: ++count, serverCount: count } )} /></div>
                            <marquee behavior="scroll" direction="left">Note: Do speak close to your mic so the voice recognition software can pick up your words.</marquee>
                       </div>
                   </div>
                   <div className="box">
                    <div className="box-content">
                    <div className="action">Chant</div>
                    <div className="direction">
                       {shlokaText === 'english' && this.getEngligh()}
                       {shlokaText === 'sanskrit' && this.getSanskrit()}
                       {shlokaText === 'kannada' && this.getKannada()}
                       <div className="languages">
                           <span onClick={() => this.setState({ shlokaText: 'english' })}>English</span>
                           <span onClick={() => this.setState({ shlokaText: 'kannada' })}>ಕನ್ನಡ</span>
                           <span onClick={() => this.setState({ shlokaText: 'sanskrit' })}>संस्कृत</span></div>
                       </div>
                    </div>
                       

                   </div>
                   <div className="box">
                    <div className="box-content">
                    <div className="action">Watch</div>
                        <div className="direction">
                        <div className="count-box">
                        <div className="counter">
                                Your Archane
                            </div>
                            
                            <div className="digit">{this.state.serverCount}</div>
                        </div>
                        
                        </div>
                    </div>
                        
                   </div>
               </div>
            </div>
            <div className="clearfix"></div>
            <div className="divider"></div>
            <div className="chintane-container-desktop" id="chintane">
                <h2>Chintane</h2>
                <p><audio autoPlay controls="controls" src={`http://docs.google.com/uc?export=open&id=${chintaneAudioSource}`}></audio></p>
                <table>
                    <thead>
                        <tr>
                            <th>Listen&nbsp;</th>
                            <th>Topic</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.viraata1})} /></td>
                            <td>Viraata Roopa Dhyaana - Part 1</td>
                            <td>Contemplation on the meaning of Vaadirajakruta Viraata Roopa Dhyaana song by Smt.Parimala Raghavendra</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.viraata2})} /></td>
                            <td>Viraata Roopa Dhyaana - Part 2</td>
                            <td>Contemplation on the meaning of Vaadirajakruta Viraata Roopa Dhyaana song by Smt.Parimala Raghavendra</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls1})} /></td>
                            <td>Lakshmi Shobhane 1</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls2})} /></td>
                            <td>Lakshmi Shobhane 2</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls3})} /></td>
                            <td>Lakshmi Shobhane 3</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls4})} /></td>
                            <td>Lakshmi Shobhane 4</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls5})} /></td>
                            <td>Lakshmi Shobhane 5</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls6})} /></td>
                            <td>Lakshmi Shobhane 6</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls7})} /></td>
                            <td>Lakshmi Shobhane 7</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls8})} /></td>
                            <td>Lakshmi Shobhane 8</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls9})} /></td>
                            <td>Lakshmi Shobhane 9</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls10})} /></td>
                            <td>Lakshmi Shobhane 10</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls11})} /></td>
                            <td>Lakshmi Shobhane 11</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls12})} /></td>
                            <td>Lakshmi Shobhane 12</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls13})} /></td>
                            <td>Lakshmi Shobhane 13</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls14})} /></td>
                            <td>Lakshmi Shobhane 14</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls15})} /></td>
                            <td>Lakshmi Shobhane 15</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls16})} /></td>
                            <td>Lakshmi Shobhane 16</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls17})} /></td>
                            <td>Lakshmi Shobhane 17</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls18})} /></td>
                            <td>Lakshmi Shobhane 18</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls19})} /></td>
                            <td>Lakshmi Shobhane 19</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ chintaneAudioSource: files.ls20})} /></td>
                            <td>Lakshmi Shobhane 20</td>
                            <td>Contemplation Lakshmi Shobhane - by Smt.Seeta Shastri Soori</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="chintane-container-desktop" id="keertane">
                <h2>Keertane</h2>
                <p><audio autoplay controls="controls" autoPlay src={`http://docs.google.com/uc?export=download&id=${keertaneAudioSource}`}></audio></p>
                <table>
                    <thead>
                        <tr>
                            <th>Listen&nbsp;</th>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td><img onClick={() => this.setState({ keertaneAudioSource: files.kudure})} src={playImg} /></td>
                            <td>Kudure Bandide</td>
                            <td>Sung by Smt. Kritika Raghavendra and Kum. Ambhrini Raghavendra</td>
                        </tr>
                        <tr>
                            <td><img src={playImg} onClick={() => this.setState({ keertaneAudioSource: files.raja})} /></td>
                            <td>Raaje Beediyolagininda</td>
                            <td>Sung by Smt. Kritika Raghavendra and Kum. Ambhrini Raghavendra</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="chintane-container-desktop" id="about">
                <div className="about-container">
                    <h2>About</h2>
                    <p>This is an effort to offer seva to Guru Sri Vadirajaru by contemplating on his great contributions to Madhwa Siddanta and the exalted position he holds in the Rujuvarga as Latavya. We offer our seva to Guru by contemplating on his works and offering our gratitude to him through this pushpa archane.</p>
                    <p><i>The purpose is to engross our manas in guru paada and this archane becomes a means to engage the manas, rather than the body.</i></p>
                </div>
                
            </div>
            </div>
            
        );
    }
}

export default HomePage;