import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import { Link } from "react-router-dom";
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
            <Input placeholder="Göran Göransson" name="name" value={formInfo.name} handleInput={handleTextInput} label="name" />
            <Input placeholder="+46 70 1234 567" name="phone" value={formInfo.phone} handleInput={handleTextInput} label="phone" />
            <Input placeholder="What do you what help with?" name="errand" value={formInfo.errand} handleInput={handleTextInput} label="errand" textarea />
            <Link to="/input-location">
                <button className="button button--secondary button--big">Go!</button>
            </Link>
        </div>
    )
}

export default CreateErrand;