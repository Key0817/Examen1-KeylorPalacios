import Image from 'next/image';

export default function presentacion() {
    return (
        <div className="presentacion ">

            <main className="main d-flex">

                <div className="saludo col-lg-6">  
                    <div className="foto col-lg-6">
                        <Image src="/img/Presentation.jpg" width={800} height={800} alt="Hombre mirando pantallas" />
                    </div> 
                    <div className="contenedorSaludo mx-auto">
                        <h1>Hello <span> I'm Keylor </span></h1>
                        <p>
                            Web designer specialized in Front-End located in Costa Rica. I offer the best jobs to help people
                        </p>

                        <a className="btnp" href="mailto:keylorpalacios85@gmail.com?subject=Consultar%20servicio&body=Hola%20Keylor,
                        %0AQuisiera%20saber%20m%C3%A1s%20sobre%20tus%20servicios" >
                            Let's work together!
                        </a>

                        <div className="iconos">
                            <a href=""></a>
                        </div>


                    </div>
                </div>


            </main>
        </div>
    )
}