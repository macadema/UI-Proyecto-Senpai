import { useState } from "react";
import '../../assets/css/login.css';
import { api } from "../../server/api";

export function LoginPage(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //El formulario se manda
    const handleSubmit = (event) => {
    event.preventDefault();

    //Cambiar el estado loading a true
    setLoading(true);

    //Borramos el error
    setError("");

    //Llamar un POST con axios a /login y mandar la info en el
    //estado actual
    api.post("/auth/login", { email: email, password: password }).then(
      (response) => {
        console.log(response);

        //Cambiar el estado loading a false
        setLoading(false);
      },
      (errorResponse) => {
        //Guardamos la respuesta de la api en una constante
        const response = errorResponse.response.data;

        //Cambiamos el estado para mostrar el error
        setError(response.error);

        //Cambiar el estado loading a false
        setLoading(false);

        //INDICAR ERROR
        setError("Usuario o contrasena incorrectos")
      }
    );
    };

    //Maneja los cambios del formulario - estado
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (

        <form id="formulario" action="" onSubmit={handleSubmit}>
           
                        <div className="campo-formulario">
                <label className="obligatorio" for="email">E-mail:</label><br/>
                <input value={email} onChange={handleEmailChange} type="email" size="80"/>
            </div>
            <br/>
            <div className="campo-formulario">
                <label className="obligatorio" for="Password">Password:</label><br/>
                <input value={password} onChange={handlePasswordChange} type="password" size="80" />
            </div>
            <br/>
            
            <button type="submit" className="button" > {loading ? "Logging in..." : "Login"} </button>

            <span> {error} </span>
        </form>
      
        )

};