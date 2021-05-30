import React from 'react';
import WidgetContent from '../WidgetContent/WidgetContent';
import './Widget.css';

const Widget = () => {
    return (
        <div className="widget">
            <div className="widget__header">
                <h5>Spaces to follow</h5>
            </div>
            <div className="widget__contents">
                <WidgetContent />
            </div>
        </div>
    );
};

export default Widget;