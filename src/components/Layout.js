import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatListing from './ChatListing';
import ChatScreen from './ChatScreen';
import * as Icon from 'react-feather';

class Layout extends Component{
    render(){
        return(
            <div className="layout">
                <Sidebar></Sidebar>
                <div className="message-container">
                    <div className="Message-heading">
                        <ul>
                            <li><Icon.MessageSquare size={20}/>Messages</li>
                           
                        </ul>
                    </div>
                    
                    <div className="box">
                        <ChatListing></ChatListing>
                    <ChatScreen></ChatScreen>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Layout;