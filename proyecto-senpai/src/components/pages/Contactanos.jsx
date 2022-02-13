export function Contactanos(){

    return (
    <>
       <div class="contenedor">
            <div class="logo">
                <img src="./imagenes/LOGO Sophie sin fondo.png" alt="logo sophie interiores"/>
            </div>

            <form id="formulario" action="">
                <div class="campo-formulario">
                    <label class="obligatorio" for="nombre">Nombre:</label><br/>
                    <input type="text" size="80" value="Sophie Interiores"/>
                </div>
                <br/>
                <div class="campo-formulario">
                    <label class="obligatorio" for="email">E-mail:</label><br/>
                    <input type="email" size={{width: "50vw" }} value="example@test.uy"/>
                </div>
                <br/>
                <div class="campo-formulario">
                    <label class="obligatorio" for="Telefono">Telefono:</label><br/>
                    <input type="text" size="80" value="099 000 000"/>
                </div>
                <br/>
                <div class="campo-formulario">
                    <label class="obligatorio" for="consulta">Consulta:</label><br/>
                    <p><textarea name="consulta" id="" cols="80" rows="10"></textarea></p>
                </div>
                <br/>
                <button class="button">Enviar</button>
            </form>

            <div class="logo">
                <img src="./imagenes/LOGO Sophie sin fondo.png" alt="logo sophie interiores"/>
            </div>
    </div>
    </>
    );
}