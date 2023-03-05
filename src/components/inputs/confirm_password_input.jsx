import React from "react";

const ConfirmPasswordInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }

    return (
        <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Повторите пароль пароль:</label>
            <input type="password" className="form-control" name="confirmPassword" id="password_confirmation" placeholder="**********"
                   onChange={handleChange} onBlur={props.onBlur && handleOnBlur}/>
        </div>
    );
}

export default ConfirmPasswordInput;