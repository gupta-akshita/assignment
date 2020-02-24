import React, { Component } from 'react';
import * as Icon from 'react-feather'; 

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div class="sidenav">
                    <div className="profile-pic">
                        <img src="https://pbs.twimg.com/profile_images/657591028858384384/7bo0uyhE_400x400.jpg">
                         </img>
                         <h3>Robin Wang</h3>
                         <p>Life starts at the end of the comfort zone!!</p>
                    </div>   
                <div className="nav-links">             
                        <ul>
                            <li>
                                <a href="#" className="head"><Icon.MessageSquare size={16}/>Messages</a>
                                <ul className="sub-head">
                                    <li>
                                        <a href="#">Chats</a>
                                        </li>
                                    <li><a href="#">Send Messages</a></li>
                                </ul>
                            </li>
                            <li>
                            <a href="#" className="head"><Icon.Users size={16}/>Groups</a>
                                <ul>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Create Groups</a></li>
                                </ul>
                            </li>
                            <li>
                            <a href="#" className="head"><Icon.Video size={16}/>Video Calls</a>
                                <ul>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Calls</a></li>
                                </ul>
                            </li>

                        </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default Sidebar;