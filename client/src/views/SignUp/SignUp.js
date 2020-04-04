import React, { useState, useEffect } from 'react';
import './signUp.scss'
import Input from '../../components/Input/Input';

const SignUp = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        phoneNumber: "",
        checkBoxes: {
            everything: true,
        }
    });

    useEffect(() => {
        console.log(formInfo);
    }, [formInfo])

    const handleTextInput = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    const handleCheckboxInput = (e) => {
        setFormInfo({
            ...formInfo,
            checkBoxes: {
                ...formInfo.checkBoxes,
                everything: e.target.checked,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo);
        //call ricky's api
    }

    return (
        <div className="signup">
            <form className="signup__form">
                <Input name="name" label="name" handleInput={handleTextInput} value={formInfo.name} />
                <Input name="phoneNumber" label="phone" handleInput={handleTextInput} value={formInfo.phone} />
                <button className="button button--primary button--big" onClick={handleSubmit}>Go!</button>
            </form>
        </div>
    )
}

export default SignUp;