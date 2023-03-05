import React from "react";

const InputPhone = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }
    return (
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Введите новый номер</label>
            <input type="phone" className="form-control" name="phone" id="phone" pattern="\+\d{8,19}"
                   aria-describedby="phoneInputDiv" required value={props.phone} placeholder="+7 999-999-99-99"
                   onChange={handleChange} onBlur={props.onBlur && handleOnBlur}/>
        </div>
    );
}

export default InputPhone;