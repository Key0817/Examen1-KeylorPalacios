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

                    <a className="btnp btn-about" href="https://www.linkedin.com/in/palacios-k/" target="_blank">Contact Me</a>

                </div>
            </main>
        </div>
    )
}