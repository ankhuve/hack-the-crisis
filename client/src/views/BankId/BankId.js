import React from 'react';
import './bankId.scss'
import {Link} from 'react-router-dom'

const BankId = () => {
    return(
        <div className="bank-id">
            <div className="bank-id__title">
                Great!
            </div>
            <div className="bank-id__subtitle">
                first we need to know who you are.
            </div>
            <Link to="/" className="button button--primary button--big">
                Verify with bankID
            </Link>
        </div>
    )
}

export default BankId;