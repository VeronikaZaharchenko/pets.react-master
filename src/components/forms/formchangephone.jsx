import InputPhone from "../inputs/inputphone";
import React, {useState} from "react";

const FormChangePhone = (props) => {
    const [phone, setPhone] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        let hs = new Headers();
        hs.append('Content-Type', 'application/json')
        hs.append('Authorization', `Bearer ${props.token}`)
        const requestOptions = {
            method: 'PATCH',
            headers: hs,
            body: JSON.stringify({phone: phone})
        };
        await fetch('https://pets.сделай.site/api/users/phone', requestOptions)
            .then(response => {
                if (response.status === 200) {
                    document.getElementById('change-phone-form').style.display = 'none';
                    document.getElementById('change-phone-primary').style.display = 'block';
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000);
                } else {
                    document.getElementById('change-phone-error').style.display = 'block';
                }
            }).catch(error => console.log('error', error));
    }

    return (
        <div>
            <div id="change-phone-error" className="alert alert-danger mb-3 text-center" role="alert"
                 style={{display: "none"}}>
                Не удалось изменить номер телефона
            </div>
            <div id="change-phone-info" className="alert alert-info mb-3 text-center" role="alert"
                 style={{display: "none"}}>
                Вы успешно изменили номер телефона
            </div>
            <form onSubmit={onSubmit} id="change-phone-form" className="animal-width300 w-50 m-auto p-3">
                <div className="mb-3 text-center">
                    <InputPhone onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-info" type="submit">Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default FormChangePhone;