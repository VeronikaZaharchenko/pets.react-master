import PersonalAccount from "../components/personalaccount";
import FormChangeEmail from "../components/forms/formchangeemail";
import FormChangePhone from "../components/forms/formchangephone";
import React, {useEffect, useState} from "react";
import Animal from "../components/animal";
import Pagination from "../components/pagination";

const Profile = (props) => {
    let [card, setCards] = useState({data: {orders: []}});
    useEffect(() => requestCards(card, setCards), []);

    const requestCards = (card, setCards) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Authorization', `Bearer ${props.token}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("https://pets.сделай.site/api/users/orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                setCards(result)
            })
            .catch(error => console.log('error', error));

    };
    console.log(card)
    const cards = card.data.orders.map((pet) => {
        return <Animal token={props.token} data={pet} photos={pet.photos1} edit_hidden=""/>;
    })
    return (
        <div>
            <h2 className="text-center text-white bg-info m-3 p-1">Личный кабинет</h2>
            <PersonalAccount token={props.token}/>
            <h2 className="text-center text-white bg-info m-3 p-1">Изменить адрес электронной почты</h2>
            <FormChangeEmail token={props.token}/>
            <h2 className="text-center text-white bg-info m-3 p-1">Изменить номер телефона</h2>
            <FormChangePhone token={props.token}/>
            <h2 className="text-center text-white bg-info m-3 p-1">Добавленные объявления</h2>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                {cards}
            </div>
            <Pagination/>
        </div>
    );
};

export default Profile;