import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './SidebarMenuNotifications.css';

class SidebarMenuNotifications extends Component {

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu right customBurgerIcon={<img src={require('../../assets/images/notification.svg')} />} burgerButtonClassName={ "notifications-menu" }>
                <a className="menu-item" href="/">
                    Your Notifications
                </a>

            </Menu>
        );
    }
}

export default SidebarMenuNotifications;