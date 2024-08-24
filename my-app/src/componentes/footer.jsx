import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cajafooter">
          <div className="sectionfooter aa">
            <div className="title">
              <h3>Soporte</h3>
            </div>
            <a href="#">Atención al Cliente</a>
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Devoluciones</a>
          </div>
          <div className="sectionfooter column aa">
            <h3>Contacto</h3>
            <a href="#"><i className="fa-solid fa-location-dot"></i> Nuestro Local</a>
            <a href="#" className="icontelefono"><i className="fa-solid fa-phone"></i> +54 351 1292054</a>
            <a href="#"><i className="fa-regular fa-envelope"></i> Patitas@gmail.com</a>
          </div>
        </div>
        <div className="sectionfooter form">
          <h3>Hacenos tu consulta!</h3>
          <form action="">
            <input type="text" placeholder="Escribe tu consulta aquí..." />
            <button className="button" type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="copy">
        <p>Todos los derechos reservados. ©️ Patitas 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
