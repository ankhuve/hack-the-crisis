import React, { useState } from "react";
import "./settingsButton.scss";

const SettingsButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handleTouchStart = () => {
        setIsPressed(true)
    }

    const handleTouchEnd = () => {
        setIsPressed(false)
    }

    return (
        <div 
            className={`settings-button${isPressed ? ' settings-button--pressed' : ''}`}
            onTouchStart={(e) => handleTouchStart()} 
            onTouchEnd={(e) => handleTouchEnd()}
            onMouseDown={e => handleTouchStart()}
            onMouseUp={e => handleTouchEnd()}
            >
            <div className="settings-button__icon"></div>
        </div>
    );
};

export default SettingsButton;
