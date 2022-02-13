import { Proyecto } from "../common/Proyecto";

export function HomePage(){
    return (
    
<>
    <main>

        <section className="portafolio">
            <div className="contenedor">
                
                <h2 className="titulo">Proyectos</h2>
               
                <div className="galeria-port">

                    <div className="imagen-port">
                        <Proyecto/>
                    </div>

                    <div className="imagen-port">
                        <Proyecto/>
                    </div>

                    <div className="imagen-port">
                        <Proyecto/>
                    </div>

                    <div className="imagen-port">
                        <Proyecto/>
                    </div>

                    <div className="imagen-port">
                        <Proyecto/>
                    </div>

                    <div className="imagen-port">
                        <Proyecto/>
                    </div>
                    
                    <div className="imagen-port">
                        <Proyecto/>
                    </div>
                
                    <div className="imagen-port">
                        <Proyecto/>
                    </div>
                    
                </div>
            </div>
        </section>

        <section>
            
            <div className="contenedor-clientes">
            
                <div className="clientes">

                    <div className="un-cliente">

                        <img src="assets/img/cliente1.jpg" alt=""/>
                        <div className="texto-cliente">
                            <h3><i>Maria</i></h3>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                        </div>

                    </div>

                    <div className="un-cliente">
                        <img src="assets/img/cliente2.jpg" alt=""/>
                        <div className="texto-cliente">
                            <h3><i>Lucrecia</i></h3>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                        </div>

                    </div>

                    <div className="un-cliente">

                        <img src="assets/img/cliente3.jpg" alt=""/>
                        <div className="texto-cliente">
                            <h3><i>Roberto</i></h3>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>

    </main>

</>
);
}