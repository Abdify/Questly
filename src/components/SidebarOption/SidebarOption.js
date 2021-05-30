import { Add } from '@material-ui/icons';
import React from 'react';
import './SidebarOption.css';
import logo from '../../images/logo.png';

const SidebarOption = () => {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img src={logo} alt="sidebar-img" />
                <p>History</p>
            </div>
            <div className="sidebarOption">
                <img src={logo} alt="sidebar-img" />
                <p>History</p>
            </div>
            <div className="sidebarOption">
                <img src={logo} alt="sidebar-img" />
                <p>History</p>
            </div>
            <div className="sidebarOption">
                <img src={logo} alt="sidebar-img" />
                <p>History</p>
            </div>
            <div className="sidebarOption">
                <img src={logo} alt="sidebar-img" />
                <p>History</p>
            </div>
            <div className="sidebarOption">
                <img src={logo} alt="sidebar-img" />
                <p>History</p>
            </div>
            <div className="sidebarOption">
                <Add />
                <p>Add More</p>
            </div>
        </div>
    );
};

export default SidebarOption;