import axios from "axios"
import { InfoEmpresa } from "../common/InfoEmpresa";
import { useEffect, useState } from "react";
import '../../assets/css/quienessomos.css'



export function QuienessomosPage(){

    const [articulos, setArticulos] = useState([]);

    //Traigo info de api.json
    useEffect(()=>{
        axios.get("/quienessomospage").then((response) => {
            setArticulos(response.data);
    });

}, []);
    
    return (
    <>
        <article className="articulo">
            <div className="articulo contenido">
                {articulos.map((articuloJSON, index)=> {
                    return (
                        <InfoEmpresa key={index}
                            title={articuloJSON.titulo}
                            content={articuloJSON.contenido}/>
                    );
                })};
            </div>

        </article>
    </>
    )
}