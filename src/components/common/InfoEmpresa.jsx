
import { useEffect, useState } from "react";

export function InfoEmpresa(){

    /*const [infoEmpresa, setInfoEmpresa] = useState([]);

    //Traigo info de api
    useEffect(()=>{
        //utilizo axios para ir a la api
        api.get("/QuienessomosPage").then((response) => {
            //actualizar estado con info de api
            setInfoEmpresa(response.data);
        });

    }, []);

    {infoEmpresa.map ((acercaDe) => {
        return (
            <>
                <h2 className="articulo contenido h2">{acercaDe.titulo}</h2>
                <p>{acercaDe.contenido}</p>
            </>
         )})
    }; */


        return (
            <>
                <h2 className="articulo contenido h2">Acerca de...</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusamus nostrum soluta. Autem
                    voluptatem amet architecto odio quaerat nisi cumque vero exercitationem soluta dolorem dolorum eaque,
                    magni hic. Nam, sint! Odit ipsa, voluptatum labore, placeat quam, doloremque amet accusantium esse
                    soluta veniam ab recusandae repellat modi incidunt aperiam facilis ea blanditiis dolor totam dicta?
                    Voluptas asperiores ad aperiam, iusto enim error ratione, fugiat eos culpa, blanditiis officia!
                    Officiis, molestias culpa?
                </p>

                <h2 className="articulo contenido h2">Mision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusamus nostrum soluta. Autem
                    voluptatem amet architecto odio quaerat nisi cumque vero exercitationem soluta dolorem dolorum eaque,
                    magni hic. Nam, sint! Odit ipsa, voluptatum labore, placeat quam, doloremque amet accusantium esse
                    soluta veniam ab recusandae repellat modi incidunt aperiam facilis ea blanditiis dolor totam dicta?
                    Voluptas asperiores ad aperiam, iusto enim error ratione, fugiat eos culpa, blanditiis officia!
                    Officiis, molestias culpa?
                </p>

                <h2 className="articulo contenido h2">Vision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusamus nostrum soluta. Autem
                    voluptatem amet architecto odio quaerat nisi cumque vero exercitationem soluta dolorem dolorum eaque,
                    magni hic. Nam, sint! Odit ipsa, voluptatum labore, placeat quam, doloremque amet accusantium esse
                    soluta veniam ab recusandae repellat modi incidunt aperiam facilis ea blanditiis dolor totam dicta?
                    Voluptas asperiores ad aperiam, iusto enim error ratione, fugiat eos culpa, blanditiis officia!
                    Officiis, molestias culpa?
                </p>

               
            </>

        )};
    