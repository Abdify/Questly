import React from 'react';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Quora.css'

const Quora = () => {
    return (
        <div className="questly">
            <Navbar />
            <div className="questly_content">
                <Sidebar />
                <Feed />
            </div>
        </div>
    );
};

export default Quora;