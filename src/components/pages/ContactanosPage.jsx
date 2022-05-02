import { useState } from 'react';
import '../../assets/css/contactanos.css'
import {api} from "../../server/api"


export function ContactanosPage(){
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [consulta, setConsulta] = useState('');
    const [telefono, setTelefono] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
       
        //Seteo estado de Loading a TRUE
        setLoading(true);

        //llamo a lA API
        api.post('/contactanospage', {
            nombre: nombre,
            email: email,
            consulta: consulta,
            telefono: telefono

        }).then((response)=>{
            console.log(response);

            //seteo estado de Loading a FALSE
            setLoading(false);
        },
        ()=>{
            setLoading(false);
        }
        );
    };

    const handleNombreChange = (event) =>{
        setNombre(event.target.value);
    };

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    };

    const handleTelefonoChange = (event) =>{
        setTelefono(event.target.value);
    };

    const handleConsultaChange = (event) =>{
        setConsulta(event.target.value);
    };

    return (
    <>
       <div className="contenedor">
            <div className="logo">
                <img src="assets/img//LOGO Sophie sin fondo.png" alt="logo sophie interiores"/>
            </div>

            <form id="formulario" action="" onSubmit={handleSubmit}>
               
                <div className="campo-formulario">
                    <label className="obligatorio" for="nombre">Nombre:</label><br/>
                    <input value={nombre} onChange={handleNombreChange} type="text" size="80"/>
                </div>
                <br/>
                <div className="campo-formulario">
                    <label className="obligatorio" for="email">E-mail:</label><br/>
                    <input value={email} onChange={handleEmailChange} type="email" size="80"/>
                </div>
                <br/>
                <div className="campo-formulario">
                    <label className="obligatorio" for="Telefono">Telefono:</label><br/>
                    <input value={telefono} onChange={handleTelefonoChange} type="text" size="80" />
                </div>
                <br/>
                <div className="campo-formulario">
                    <label className="obligatorio" for="consulta">Consulta:</label><br/>
                    <p><textarea value={consulta} onChange={handleConsultaChange} name="consulta" id="" cols="80" rows="10"></textarea></p>
                </div>
                <br/>
                <button type="submit" className="button" > {loading ? "Enviando..." : "Enviar"} </button>
            </form>

            <div className="logo">
                <img src="assets/img//LOGO Sophie sin fondo.png" alt="logo sophie interiores"/>
            </div>
    </div>
    </>
    );
}