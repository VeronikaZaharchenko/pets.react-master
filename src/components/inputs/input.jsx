import React from "react";

const InputComponent = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor="formInput" className="form-label">{props.comp.label}</label>
            <input type={props.comp.type} className="form-control" id="formInput" aria-describedby="formHelp"/>
            <div id="formHelp" className="form-text">{props.comp.help}</div>
        </div>
    );
}

export default InputComponent;