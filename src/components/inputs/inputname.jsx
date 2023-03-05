import React from "react";

const InputName = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }
    return (
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Введите имя:</label>
            <input type="text" className="form-control" name="name" id="name" pattern="[А-Яа-я]+" placeholder="Мария"
                   aria-describedby="nameInputDiv" onChange={handleChange} onBlur={props.onBlur && handleOnBlur}
                   value={props.name} required/>
        </div>
    );
};

export default InputName;