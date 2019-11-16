import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './SidebarMenuNotifications.css';

class SidebarMenuNotifications extends Component<{ buttonColor?: string }> {

    showSettings(event) {
        event.preventDefault();
    }

    returnBurgerIcon(){
        if (this.props.buttonColor && this.props.buttonColor == 'blue'){
            return require('../../assets/images/notification-blue.svg');
        }
        return require('../../assets/images/notification.svg')
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu right customBurgerIcon={<img src={this.returnBurgerIcon()} />} burgerButtonClassName={ "notifications-menu" }>
                <a className="menu-item" href="/">
                    Your Notifications
                </a>

            </Menu>
        );
    }
}

export default SidebarMenuNotifications;