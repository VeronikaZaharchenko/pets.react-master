import React, {useEffect, useState} from "react";
import Animal from "./animal";


const AnimalCard = (props) => {
    let [card, setCards] = useState({data: {orders: []}});
    useEffect(() => requestCards(setCards), []);

    const requestCards = (setCards) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("https://pets.сделай.site/api/pets", requestOptions)
            .then(response => response.json())
            .then(result => {
                setCards(result)
            })
            .catch(error => console.log('error', error));

    };

    const cards = card.data.orders.map((pet) => {
        return <Animal data={pet} photos={pet.photos} edit_hidden={props.edit_hidden}/>;
    })

    return (
        <div>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                {cards.slice(0, 6)}
            </div>
        </div>
    );
};

export default AnimalCard;