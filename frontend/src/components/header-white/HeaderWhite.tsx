import React, { Component } from 'react';
import SidebarMenu from '../sidebar-menu/SidebarMenu';
import SidebarMenuNotifications from '../sidebar-menu-notifications/SidebarMenuNotifications';
import './HeaderWhite.css';

class HeaderWhite extends Component {

    render() {
        // NOTE: Menu, Logo and Notifications. Message of the Day shown on Dashboard
        return (
            <div className="header header-white">
                <div className="burger-menu">
                    <SidebarMenu buttonColor="blue">
                    </SidebarMenu>
                </div>
                <div className="logo-container"><img className="logo-image" width="200px" src={require('../../assets/images/logo-blue.svg')} /></div>
                <div className="notifications">
                    <SidebarMenuNotifications buttonColor="blue">
                    </SidebarMenuNotifications>
                </div>
            </div>
        );
    }
}

export default HeaderWhite;
