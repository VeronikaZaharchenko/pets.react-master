import FormAuth from "../components/forms/formauth";

const Auth = (props) => {
    return (
        <div>
            <h2 className="text-center text-white bg-info m-3 p-1">Авторизация</h2>
            <FormAuth setToken={props.setToken}/>
        </div>
    );
};

export default Auth;