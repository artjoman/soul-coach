import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './SidebarMenu.css';

class SidebarMenu extends Component<{ buttonColor?: string }> {

    public buttonColor: string;
    
    showSettings(event) {
        event.preventDefault();
    }
    
    returnBurgerIcon(){
        if (this.props.buttonColor && this.props.buttonColor == 'blue'){
            return require('../../assets/images/menu-blue.svg');
        }
        return require('../../assets/images/menu.svg')
    }
    
    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu customBurgerIcon={<img src={this.returnBurgerIcon()} />}>
                <a className="menu-item" href="/">
                    Dashboard
                </a>

                <a className="menu-item" href="/streams">
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