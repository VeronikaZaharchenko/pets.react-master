import React from "react";
import FormAddPet from "../components/forms/formaddpet";


const AddPet = (props) => {
    return (
        <div>
            <h2 className="text-center text-white bg-info m-3 p-1">Добавление нового объявления</h2>
            <FormAddPet token={props.token}/>
        </div>
    );
}

export default AddPet;