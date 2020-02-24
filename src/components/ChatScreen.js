import React, { Component } from 'react';

class ChatScreen extends Component {
    constructor(props){ 
        super(props);
        this.state={
            floatBtn: false
        }
    }

    floatingBtnHandler = () => {
        this.setState({floatBtn: !this.state.floatBtn})
    }
    render() {
        return (
        <div className="chatscreen-container">
            <div className="header">
                <ul>
                    <li>
                        Replies
                    </li>
                    <li>
                        Reports
                    </li>
                </ul>
            </div>
            {this.state.floatBtn &&(<div className="floating-menu">
                <ul>
                    <li>
                        Photos
                    </li>
                    <li>
                        Files
                    </li>
                    <li>
                        Link
                    </li>
                </ul>
            </div>)}
            <button className="floating-btn" onClick={this.floatingBtnHandler}>+</button>
           
        </div>
        );
    }
}

export default ChatScreen;