import React, { Component } from 'react';

class ChatItem extends Component {
    render() {
        const { name, info, timestamp, replies, insights } = this.props.dataValue;
        return (
            <div className="chatItem-box">
                <div className="chatItem">
                    <div className="user-Image">
                        <img src="https://pbs.twimg.com/profile_images/657591028858384384/7bo0uyhE_400x400.jpg"></img>
                    </div>
                    <div className="user-info">
                        <h3>{name}</h3>
                        <p>{info}</p>
                    </div>

                </div>
                <div className="chatitem-foot">
                    <ul>
                        <li>
                            <a href="#">{timestamp}</a></li>

                    </ul>
                </div>
            </div>
        );
    }
}


export default ChatItem;