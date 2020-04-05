import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./signUp.scss";
import Input from "../../components/Input/Input";
import map from "../../assets/images/map.png";

const SignUp = () => {
    const history = useHistory();
    const [formInfo, setFormInfo] = useState({
        name: "",
        phoneNumber: "",
        checkBoxes: {
            everything: true,
        },
    });
    const [formIsValid, setFormIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (formInfo.name && formInfo.phoneNumber) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [formInfo]);

    const handleTextInput = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxInput = (e) => {
        setFormInfo({
            ...formInfo,
            checkBoxes: {
                ...formInfo.checkBoxes,
                everything: e.target.checked,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // fake api call
        setTimeout(() => {
            setLoading(false);
            history.push("/missions");
        }, 500);
    };

    return (
        <div className="signup">
            <h1>Great!</h1>
            <p>Glad to have you onboard.</p>
            <form className="signup__form">
                <div className="flex justify-center m-t-3 m-b-3">
                    <div className="avatar avatar--large">
                        <img src={map} />
                    </div>
                </div>
                <Input name="name" label="Name" handleInput={handleTextInput} value={formInfo.name} placeholder="Firstname Lastname" />
                <Input name="phoneNumber" label="Phone" handleInput={handleTextInput} value={formInfo.phone} placeholder="+46 70 1234 123" />
                <button
                    className="button button--primary button--big"
                    onClick={handleSubmit}
                    disabled={!formIsValid || loading}
                >
                    Find a mission
                </button>
            </form>
        </div>
    );
};

export default SignUp;
