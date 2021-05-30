import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import './QuoraBox.css';

const QuoraBox = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className="questlyBox">
            <div className="questlyBox_info">
                <Avatar />
                <h5>{user.displayName ? user.displayName : user.email}</h5>
            </div>
            <div className="questlyBox_questly">
                <p>What is your question?</p>
            </div>
        </div>
    );
};

export default QuoraBox;