import React from "react";

const InputPassword = (props) => {
    const required = props.required == null ? true : props.required;
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }

    return (
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Введите пароль:</label>
            <input type="password" className="form-control" name="password" id="password"
                   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$"
                   onChange={handleChange} onBlur={props.onBlur && handleOnBlur}
                   aria-describedby="passwordInputDiv"
                   required={required}/>
            <div id="passwordInputDiv" className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                буква, 1 - заглавная
                буква
            </div>
        </div>
    );
}

export default InputPassword;