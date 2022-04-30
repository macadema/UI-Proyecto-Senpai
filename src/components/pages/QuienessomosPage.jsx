import { InfoEmpresa } from "../common/InfoEmpresa";

import '../../assets/css/quienessomos.css'


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
                        <InfoEmpresa key={articulo.id}
                            title={articulo.titulo}
                            content={articulo.contenido}/>
                    );
                })}
            </div>

        </article>
    </>
    )
}