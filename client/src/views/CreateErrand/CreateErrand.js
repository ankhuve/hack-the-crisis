import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import './createErrand.scss'

const CreateErrand = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        phone: "",
        errand: "",
    })

    const handleTextInput = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo);
        //call ricky's api
    }

    return ( 
        <div className="create-errand">
            <Input name="name" value={formInfo.name} handleInput={handleTextInput} label="name" />
            <Input name="phone" value={formInfo.phone} handleInput={handleTextInput} label="phone" />
            <Input name="errand" value={formInfo.errand} handleInput={handleTextInput} label="errand" textarea />
            <button className="button button--secondary button--big" onClick={handleSubmit}>Go!</button>
        </div>
    )
}

export default CreateErrand;