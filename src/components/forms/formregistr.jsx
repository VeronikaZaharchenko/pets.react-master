import React, {useState} from "react";
import InputPhone from "../inputs/inputphone";
import InputEmail from "../inputs/inputemail";
import InputName from "../inputs/inputname";
import PasswordInput from "../inputs/password_input";
import CheckboxAgree from "../inputs/checkbox_agree";
import ConfirmPasswordInput from "../inputs/confirm_password_input";
import {Link} from "react-router-dom";


const FormRegistr = () => {
    let [input, setInput] = useState({
        name: "", phone: "", email: "", password: "", confirmPassword: ""
    });
    const [error, setError] = useState({password: "", confirmPassword: ""});
    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }
    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: ""};
            switch (name) {
                case "password":
                    if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    }

    const register = (e) => {
        e.preventDefault();
        let raw = JSON.stringify(
            {
                name: input.name,
                phone: input.phone,
                email: input.email,
                password: input.password,
                password_confirmation: input.confirmPassword,
                confirm: 1
            }
        );

        let hs = new Headers();
        hs.append('Content-Type', 'application/json')

        let requestOptions = {
            method: 'POST',
            body: raw,
            headers: hs
        };
        fetch(`https://pets.сделай.site/api/register`, requestOptions)
            .then(response => {
                const status_code = response.status
                if (status_code === 204) {
                    document.getElementById('register_form').style.display = 'none';
                    document.getElementById('register_success').style.display = 'block';
                }
            })
            .catch(error => console.log('error', error));
    }


    return (
        <div className="p-3">
            <div id="register_info" className="alert alert-info mb-3 text-center" role="alert"
                 style={{display: "none"}}>
                Регистрация прошла успешно! Пройдите <Link to={'/login'}>аутентификацию</Link>, чтобы продолжить
            </div>
            <form onSubmit={register} id="register_form" className="animal-width300 w-50 m-auto border p-3">
                <InputName onChange={onInputChange} onBlur={validateInput}/>
                <InputPhone onChange={onInputChange} onBlur={validateInput}/>
                <InputEmail onChange={onInputChange} onBlur={validateInput}/>
                <PasswordInput onChange={onInputChange} onBlur={validateInput}/>
                <ConfirmPasswordInput onChange={onInputChange} onBlur={validateInput}/>
                <span id="reg_error" className="text-danger small mb-3">
                    {error.password || error.confirmPassword}
                </span>
                <CheckboxAgree/>

                <div className="text-center">
                    <input type="submit" className="btn btn-info w-100"
                           disabled={error.password || error.confirmPassword} value="Зарегистрироваться"/>
                </div>
            </form>
        </div>
    );
};

export default FormRegistr;