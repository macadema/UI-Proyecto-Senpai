import { Proyecto } from "../common/Proyecto";
import { Clientes } from "../common/Clientes";
import '../../assets/css/homepage.css'

export function HomePage(){
    
    
    return (
    
<>
    <main>

    <section className="portafolio">
            <div className="contenedor">
                
                <h2 className="titulo">Proyectos</h2>
               
                <div className="galeria-port">
                    <Proyecto/>
                </div>
            </div>
        </section>

        <section>
            
            <div className="contenedor-clientes">
                
                <div className="clientes">
                    <Clientes/>
                 
                </div>
            </div>
        </section>

    </main>

</>
)}
