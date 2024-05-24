import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='container footer'>
        <nav className='navf'>
          <div className="links-container">
            <a href="#presentacion">Home</a>
            <a href="#skills">Skills</a>
            <div className="contact-container">
              <details>
                <summary>Contact Me</summary>
                <ul>
                  <li><a href="https://www.instagram.com/palacios_k_23?igsh=eGZxNXVpdnlidHp6" target="_blank">Instagram</a></li>
                  <li><a href="https://www.facebook.com/keylor.palacios.509?mibextid=ZbWKwL" target='_blank'>Facebook</a></li>
                  <li><a href="https://www.linkedin.com/in/palacios-k/" target="_blank">LinkedIn</a></li>
                  <li><a href="https://x.com/palacioskeylor2?t=CQHVJFOYj_HU8XStNcl4eQ&s=09" target='_blank'>Twitter</a></li>
                  <li><a href="mailto:keylorpalacios85@gmail.com?subject=Consultar%20servicio&body=Hola%20Keylor,
                    %0AQuisiera%20saber%20m%C3%A1s%20sobre%20tus%20servicios">Correo</a></li>
                </ul>
              </details>
            </div>
          </div>
          <img id='LogoFoot' src="/img/NAV.jpg" width={200} height={100} alt="Logo" />
        </nav>
      </div>
    </footer>
  );
}

