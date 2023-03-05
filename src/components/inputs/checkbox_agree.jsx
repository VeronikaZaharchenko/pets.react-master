import React from "react";

const CheckboxAgree = () => {
    return (
        <div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check" required/>
                <label className="form-check-label" htmlFor="check">Согласие на обработку персональных
                    данных</label>
            </div>
        </div>
    );
}

export default CheckboxAgree;