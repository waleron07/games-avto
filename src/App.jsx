import React, { Component } from 'react';
import connect from 'baobab-connect';
import Stamp from "./components/Stamp";

import { logo } from './images'

@connect({
    stamp: 'stamp'
})

class App extends Component {

    handleClick = (event, text) => {
        const speack = new SpeechSynthesisUtterance(text);
        speack.lang = 'ru-RU';
        speack.volume = 1;
        speechSynthesis.speak(speack)
    }

    render() {
        const { stamp } = this.props;
        return(
            <>
                <div>
                    <div className="logo">
                        <img src={logo} height="300"/>
                    </div>
                    <div className="header">
                        <h1>Учим марки автомобилей</h1>
                    </div>
                    <ul className="cars">
                    {stamp.map(({ stamp, text }, index) => {
                        return(
                            <li className="cars__stamp"
                                key={`${stamp}${index}`}>
                                <Stamp
                                    stamp={stamp}
                                    text={text}
                                    index={index}
                                    onClick={this.handleClick}/>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </>
        )
    }
}

export default App;
