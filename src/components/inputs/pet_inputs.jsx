import React from "react";


const PetInputs = (props) => {
    const pet = props.pet;
    const onInputChange = props.onChange;
    const [changePhoto1Handler, changePhoto2Handler, changePhoto3Handler] = props.changeFileHandlers;
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                <input type="text" onChange={onInputChange} className="form-control" id="kind" value={pet.kind}
                       required/>
                <div className="form-text">Обязательное поле</div>
            </div>

            <div className="mb-3 p-3 border">
                <div className="form-text">Обязательное поле</div>
                <input type="file" className="form-control" id="image1" onChange={changePhoto1Handler}
                       required/>
                <div className="form-text">Необязательные поля</div>
                <input type="file" className="form-control mb-3" id="image2" onChange={changePhoto2Handler}/>
                <input type="file" className="form-control mb-3" id="image3" onChange={changePhoto3Handler}/>
            </div>

            <div className="mb-3">
                <label htmlFor="chip" className="form-label">Электронный чип:</label>
                <input type="text" onChange={onInputChange} className="form-control" id="mark" required
                       value={pet.mark}/>
                <div className="form-text">Обязательное поле.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Описание:</label>
                <textarea onChange={onInputChange} className="form-control" id="description" required
                          value={pet.description}></textarea>
                <div className="form-text">Обязательное поле.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Район:</label>
                <input onChange={onInputChange} type="text" className="form-control" id="district" required
                       value={pet.district}/>
                <div className="form-text">Обязательное поле.</div>
            </div>

        </div>
    );
}

export default PetInputs;