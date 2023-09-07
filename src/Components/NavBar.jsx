export const NavBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Acerca de nosotros</a>
        </li>
        <li>
          <a href="#">Ofertas especiales</a>
        </li>
        <li>
          <a href="#">Habitaciones</a>
        </li>
        <li>
          <a href="#">Galería</a>
        </li>
        <li>
          <a href="#">Contáctanos</a>
        </li>
      </ul>
      <button className="reservar-button">
        <a href="#">Reservar</a>
      </button>
    </div>
  );
};
