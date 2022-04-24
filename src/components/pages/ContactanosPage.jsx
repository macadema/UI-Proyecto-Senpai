export function ContactanosPage(){

    return (
    <>
       <div className="contenedor">
            <div className="logo">
                <img src="assets/img//LOGO Sophie sin fondo.png" alt="logo sophie interiores"/>
            </div>

            <form id="formulario" action="">
                <div className="campo-formulario">
                    <label className="obligatorio" for="nombre">Nombre:</label><br/>
                    <input type="text" size="80" value="Sophie Interiores"/>
                </div>
                <br/>
                <div className="campo-formulario">
                    <label className="obligatorio" for="email">E-mail:</label><br/>
                    <input type="email" size="80" value="example@test.uy"/>
                </div>
                <br/>
                <div className="campo-formulario">
                    <label className="obligatorio" for="Telefono">Telefono:</label><br/>
                    <input type="text" size="80" value="099 000 000"/>
                </div>
                <br/>
                <div className="campo-formulario">
                    <label className="obligatorio" for="consulta">Consulta:</label><br/>
                    <p><textarea name="consulta" id="" cols="80" rows="10"></textarea></p>
                </div>
                <br/>
                <button type="submit" className="button">Enviar</button>
            </form>

            <div className="logo">
                <img src="assets/img//LOGO Sophie sin fondo.png" alt="logo sophie interiores"/>
            </div>
    </div>
    </>
    );
}