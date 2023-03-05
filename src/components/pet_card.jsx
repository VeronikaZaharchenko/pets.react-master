import React from "react";


const PetCard = (props) => {
    const pet = props.pet
    const photos = props.photos
    let images;
    if (typeof photos !== 'string') {
        images = photos.map((image) => {
            return <img src={'https://pets.сделай.site' + image} className="animal-width250 w-25 p-3"
                        alt="рисунок животного"/>;
        })
    } else {
        images = [<img src={'https://pets.сделай.site' + photos} className="animal-width250 w-25 p-3"
                       alt="рисунок животного"/>
        ]
    }
    return (
        <div
            className="animal-d-flex-300 d-flex flex-row flex-wrap border m-auto p-3 position-relative w-50">
            <div className="d-flex flex-row flex-wrap justify-content-around border border">
                {images}
            </div>
            <p className="animal-width250 mt-2 text-center w-50 fw-bold">id:</p>
            <p className="animal-width250 mt-2 text-center w-50">{pet.id}</p>

            <p className="animal-width250 w-50 text-center fw-bold">Имя:</p>
            <p className="animal-width250 w-50 text-center">{pet.name}</p>

            <p className="animal-width250 w-50 text-center fw-bold">Телефон:</p>
            <p className="animal-width250 w-50 text-center">{pet.phone}</p>

            <p className="animal-width250 w-50 text-center fw-bold">E-mail:</p>
            <p className="animal-width250 w-50 text-center">{pet.email}</p>

            <p className="animal-width250 text-center w-50 fw-bold">Вид животного:</p>
            <p className="animal-width250 text-center w-50">{pet.kind}</p>

            <p className="animal-width300 text-center w-50 fw-bold">Описание:</p>
            <p className="animal-width300 text-center w-50">{pet.description}</p>

            <p className="animal-width300 text-center w-50 fw-bold">Номер чипа:</p>
            <p className="animal-width300 text-center w-50">{pet.mark}</p>

            <p className="animal-width300 text-center w-50 fw-bold">Район:</p>
            <p className="animal-width300 text-center w-50">{pet.district}</p>

            <p className="animal-width300 text-center w-50 fw-bold">Дата:</p>
            <p className="animal-width300 text-center w-50">{pet.date}</p>
        </div>
    );
}

export default PetCard;