import React from 'react';
import './errandRow.scss'

const ErrandRow = ({name, distance, unit = 'm', avatarSrc, onClick}) => {
    return(
        <div className="errand-row" onClick={onClick}>
            <div className="errand-row__image avatar">
                { avatarSrc && <img src={avatarSrc} /> } 
            </div>
            <div className="errand-row__texts">
                <div className="errand-row__texts__name">
                    {name}
                </div>
                <div className="errand-row__texts__errand">
                    Groceries
                </div>
            </div>
            <div className="errand-row__distance">{`${distance}${unit}`}</div>
        </div>
    )
}

export default ErrandRow;