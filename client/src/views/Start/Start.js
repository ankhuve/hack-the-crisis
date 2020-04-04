import React from 'react';
import './start.scss';

const Start = () => {
    
    return (
        <div className={'Start'}>
            <button className={'Start__choice button'}>
                <h1 className={'Start__choice__title'}>I want to help</h1>
            </button>
            <button className={'Start__choice button'}>
                <h1 className={'Start__choice__title'}>I need help</h1>
            </button>
        </div>
    )
}

export default Start;