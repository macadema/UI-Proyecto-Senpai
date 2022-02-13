export function Proyecto(props){
    return (
        <>
            <img src="assets/img/proyectos1.jpg" alt=""/>
            <div className="hover-galeria">
                <img src="assets/img/LOGO Sophie sin fondo.png" alt=""/>
                <p>{props.Proyecto}</p>
            </div>
        </>      
    )
}