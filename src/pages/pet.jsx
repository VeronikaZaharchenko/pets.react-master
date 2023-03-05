import React, {useEffect, useState} from "react";
import PetCard from "../components/pet_card";
import {useParams} from "react-router-dom";
import {getPet} from "../components/getPet";


const Pet = () => {
    const params = useParams();
    const pet_id = params.pet_id;
    let [pet, setPet] = useState({data: {pet: []}});
    useEffect(() => getPet(pet_id, setPet), [pet_id])
    return (
        <div>
            <h2 className="text-center text-white bg-info m-2">Карточка животного</h2>
            <PetCard pet={pet.data.pet} photos={[pet.data.pet.photos1]}/>
        </div>
    );
}

export default Pet;