export const NavBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">OFERTAS ESPECIALES</a>
        </li>
        <br></br>
        <li>
          <a href="#">HABITACIONES</a>
        </li>
        <br></br>
        <li>
          <a href="#">GALERÍA</a>
        </li>
        <br></br>
        <li>
          <a href="#">CONTÁCTANOS</a>
        </li>
      </ul>
      <button className="reservar-button">
        <a href="#">RESERVA AHORA</a>
      </button>
    </div>
  );
};
