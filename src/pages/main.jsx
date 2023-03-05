import Slider from "../components/slider"
import AnimalCard from "../components/animal_card"
import FormSubNews from "../components/forms/formsubnews";

const Main = () => {
    return (
        <div>
            <main style={{minHeight:'70vh'}}>
            <h2 className="text-center text-white bg-info m-3 p-1">Найденные животные</h2>
            <Slider/>
            <h2 className="text-center text-white bg-info m-3 p-1">Карточки найденных животных</h2>
            <AnimalCard edit_hidden="hidden"/>
            <h2 className="text-center text-white bg-info m-3 p-1">Подписка на новости</h2>
            <FormSubNews/>
            </main>
        </div>
    );
};

export default Main;