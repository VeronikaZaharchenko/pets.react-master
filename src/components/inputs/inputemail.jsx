import React from "react";

const InputEmail = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }
    return (
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailInput" placeholder="abcdef@gmail.com"
                   onChange={handleChange} onBlur={props.onBlur && handleOnBlur} required value={props.email}/>
            <div id="emailInput" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>
    );
};

export default InputEmail;