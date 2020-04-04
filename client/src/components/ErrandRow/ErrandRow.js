import React from 'react';
import './errandRow.scss'

const ErrandRow = ({name, distance}) => {
    return(
        <div className="errand-row">
            <div className="errand-row__image"></div>
            <div className="errand-row__texts">
                <div className="errand-row__texts__name">
                    {name}
                </div>
                <div className="errand-row__texts__errand">
                    Groceries
                </div>
            </div>
            <div className="errand-row__distance">{`${distance}m`}</div>
        </div>
    )
}

export default ErrandRow;