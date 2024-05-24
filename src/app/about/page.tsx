import ImgAbout from "../img/programacion.png"
import Image from 'next/image';
export default function about(){
    return(
        <div className="about container">
            <main className="about d-flex">
                <div className="foto fotoAbout col-lg-5">
                    <Image src="/img/Lagptop.jpg" width={600} height={600} alt="Laptop de desarrollo" />
                </div>
                <div className="saludo saludoAbout col-lg-7">
                    <h1>About <span>Me</span></h1>
                    
                    <p>Developer with superior Front-End skill, I have created multi-page layouts. 
                        I also have basic knowledge of programming..</p>

                    <a className="btnp btn-about" href="mailto:keylorpalacios85@gmail.com?subject=Consultar%20servicio&body=Hola%20Keylor,
                    %0AQuisiera%20saber%20m%C3%A1s%20sobre%20tus%20servicios"  >Contact Me</a>

                </div>
            </main>
        </div>
    )
}