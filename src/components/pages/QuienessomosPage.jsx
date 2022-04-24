import { Articulo } from "../common/Articulo";
import axios from "axios";
import { useEffect, useState } from "react";

export function QuienessomosPage(){

    const [articulos, setArticulos] = useState([]);

    //Traigo info de api.json
    useEffect(()=>{
        axios.get("http://localhost:3000/Articulos").then((response) => {
            setArticulos(response.data);
    });

}, []);
    
    return (
    <>
        <article className="articulo">
            <div className="articulo contenido">
                {articulos.map(function (articulo) {
                    return (
                        <Articulo key={articulo.id}
                            title={articulo.titulo} />
                        
                    );
                })}
            </div>

            <div className="articulo contenido">
                <h2 className="articulo contenido h2">Vision</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id totam vitae fugit dolorem, voluptatum
                    necessitatibus eos explicabo alias animi suscipit rem similique in eum exercitationem repudiandae
                    praesentium ratione, nemo odio nisi. Tenetur ut eum deleniti doloribus laborum iusto nihil, voluptate,
                    error eos officia neque labore necessitatibus nobis voluptatem a, aperiam sapiente facere quos
                    repudiandae iure soluta! Repudiandae ipsum voluptates suscipit, voluptatibus quos, reprehenderit autem
                    accusantium velit iste illum excepturi facilis.</p>
            </div>

        </article>
    </>
    )
}