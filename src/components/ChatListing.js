import React, { Component } from 'react';
import ChatItem from './ChatItem';

class ChatListing extends Component{
    render(){
        let data = [
            {
                "image": "",
                "name": "Olivia Sol",
                "info": "Hey robin, this seems like a great start",
                "timestamp": "19 Jan, 2018 | 03:49 pm",
                "replies": 20,
                "insights": "290/300"
            },
            {
                "image": "",
                "name": "Alexander",
                "info": "I'll be send the mail soon.",
                "timestamp": "19 Jan, 2018 | 03:40 pm",
                "replies": 14,
                "insights": "120/149"
            },
            {
                "image": "",
                "name": "Sophia Richi",
                "info": "Thanks, how about an icecream?",
                "timestamp": "19 Jan, 2018 | 03:39 pm",
                "replies": 11,
                "insights": "100/119"
            },
            {
                "image": "",
                "name": "Ethan Malson",
                "info": "Wohoo",
                "timestamp": "18 Jan, 2018 | 10:30 am",
                "replies": 5,
                "insights": "123/180"
            },
            {
                "image": "",
                "name": "William",
                "info": "okay please tell me the state of velco..",
                "timestamp": "18 Jan, 2018 | 08:10 am",
                "replies": 10,
                "insights": "169/190"
            }
        ]
        return(
            <div className="chatlisting-container">
               <div className="chatlist-heading">
                    <ul>
                        <li>
                            <a href="#">Chats</a>
                        </li>
                    </ul>   
                </div> 
                <div className="chatlist-item">
                    {data.map(d=><ChatItem dataValue={d}></ChatItem>
                    )}
                      
                </div>  
            </div>
        );
    }
}

export default ChatListing;