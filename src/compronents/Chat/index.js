import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';
import abc from '../../image/im2.png'
import './style.css'

import 'react-chat-widget/lib/styles.css';

class Chat extends Component {
    render() {
        return (
            <div className="App">
                <Widget style={
                    {
                        position: 'absolute',
                        left: 0,
                    }} />
                    <h2 style={{
                        borderBottom: '1px solid #dee5ef',
                        background: '#FAFAFA',
                        }}>GENO</h2>
                        <img className='aa' height='50px' width='50px' src={abc}/>
            </div>
        );
    }
}

export default Chat;