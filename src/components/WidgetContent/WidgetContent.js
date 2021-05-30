import React from 'react';
import './WidgetContent.css';
import logo from '../../images/logo.png';

const WidgetContent = () => {
    return (
        <div className="widget_contents">
            <div className="widget_content">
                <img src={logo} alt="widget-img" />
                <div className="widget_content_title">
                    <h5>Mobile App Programmer</h5>
                    <p>The Mobile App Development Company.</p>
                </div>
            </div>
            <div className="widget_content">
                <img src={logo} alt="widget-img" />
                <div className="widget_content_title">
                    <h5>Mobile App Programmer</h5>
                    <p>The Mobile App Development Company.</p>
                </div>
            </div>
            <div className="widget_content">
                <img src={logo} alt="widget-img" />
                <div className="widget_content_title">
                    <h5>Mobile App Programmer</h5>
                    <p>The Mobile App Development Company.</p>
                </div>
            </div>
        </div>
    );
};

export default WidgetContent;