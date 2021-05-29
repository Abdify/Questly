import { Avatar } from '@material-ui/core';
import React from 'react';
import './QuoraBox.css';

const QuoraBox = () => {
    return (
        <div className="questlyBox">
            <div className="questlyBox_info">
                <Avatar />
                <h5>User Name</h5>
            </div>
            <div className="questlyBox_questly">
                <p>What is your question?</p>
            </div>
        </div>
    );
};

export default QuoraBox;