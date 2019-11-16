import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './SidebarMenu.css';

class SidebarMenu extends Component {

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu>
                <a className="menu-item" href="/">
                    Dashboard
                </a>

                <a className="menu-item" href="/stream">
                    Soul Coach Stream
                </a>

                <a className="menu-item" href="/link">
                    Soul Coach Link
                </a>

                <a className="menu-item" href="/toll4troll">
                    Toll 4 Troll
                </a>
            </Menu>
        );
    }
}

export default SidebarMenu;