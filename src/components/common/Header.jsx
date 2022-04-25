export function Header(){

    return (
    <>
        <header style={{
                background: "hsla(177, 94%, 38%, 0.699)",
                /* fallback for old browsers */
                background: "-webkit-linear-gradient(to right, hsla(187, 48%, 52%, 0.658), hsla(177, 94%, 38%, 0.712)), url(assets/img/fondoheader.jpg)",
                /* Chrome 10-25, Safari 5.1-6 */
                background: "linear-gradient(to right, #4ab2bfa8, hsla(177, 90%, 34%, 0.678)), url(assets/img/fondoheader.jpg)",
                /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                position: "relative",
                }}>

            <nav>
                <a href="../HomePage">Home</a>
                <a href="../Quienessomos">Quienes somos</a>
                <a href="../Contactanos">Contactanos</a>
                <a href="#">Login</a>
            </nav>

                <section className="titulos-header" url="./ProyectoSenpai.html">
                <h1>Sophie Interiores</h1>
                <h2>Diseñando Sueños</h2>

            </section>

            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path style= {{fill: "#cfdee7", fillOpacity: "1"}}
                    d="M0,96L48,117.3C96,139,192,181,288,208C384,235,480,245,576,234.7C672,224,768,192,864,170.7C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>

        </header>
    </>
    );
}