import React from 'react';
import './TranslucentButton.css';

const TranslucentButton = ({ onClick, children, style }) => {
    return (
        <button className="translucent-button" onClick={onClick} style={style}>
            {children}
        </button>
    );
};

export default TranslucentButton;