import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import SidebarMenu from '../sidebar-menu/SidebarMenu';
import SidebarMenuNotifications from '../sidebar-menu-notifications/SidebarMenuNotifications';
import './Header.css';

class Header extends Component {

    render() {
        // NOTE: Menu, Logo and Notifications. Message of the Day shown on Dashboard
        return (
            <div className="header">
                <div className="burger-menu">
                    <SidebarMenu>
                    </SidebarMenu>
                </div>
                <div className="logo-container"><img className="logo-image" width="200px" src={require('../../assets/images/logo.svg')} /></div>
                <div className="notifications">
                    <SidebarMenuNotifications>
                    </SidebarMenuNotifications>
                </div>
                <div className="welcome-of-the-day">
                    <span className="welcome-of-the-day-opaque">Happy to see you again,</span>
                    &nbsp;
                    <b>John!</b>
                </div>

            </div>
        );
    }
}

export default Header;