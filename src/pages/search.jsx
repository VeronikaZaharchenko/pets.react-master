import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Search = () => {
    const [query, setQuery] = useState({district: "Приморский", kind: ""});
    const navigate = useNavigate();

    const showResult = (e) => {
        e.preventDefault();
        navigate({
            pathname: '/search',
            search: `?district=${query.district}&kind=${query.kind}`
        })
    }
    return (
        <div>
            <h2 className="text-center text-white bg-info m-3 p-1">Поиск по объявлениям</h2>
            <div className="p-3">
                <form method="GET" onSubmit={showResult} className="animal-width300 w-50 m-auto border p-3">
                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">Выберите район:</label>
                        <select id="district" className="form-select" onChange={(e) => {
                            setQuery({kind: query.kind, district: e.target.value})
                        }}>
                            <option>Приморский</option>
                            <option>Петроградский</option>
                            <option>Василеостровский</option>
                            <option>Центральный</option>
                            <option>Красногвардейский</option>
                            <option>Выборгский</option>
                            <option>Калининский</option>
                            <option>Невский</option>
                            <option>Курортный</option>
                            <option>Медвежий угол</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Введите вид животного:</label>
                        <input type="text" className="form-control" id="password" placeholder="Например: Кошка" onChange={(e) => {
                            setQuery({kind: e.target.value, district: query.district})
                        }} required/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-info w-100" value="Найти"
                                >Поиск
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;