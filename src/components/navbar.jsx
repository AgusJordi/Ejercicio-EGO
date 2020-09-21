import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => { 

 return (  
 
 
 
 
 
 <nav class="navbar navbar-light bg-light justify-content-evenly">
     <Link to="/models">
<p class="navbar-brand">Modelos</p>
</Link>
<Link to="/datamodels">
<p class="navbar-brand">Ficha de modelo</p>
</Link>
 
  <form class="form-inline">
  
  <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Modelos</button>
    <button class="dropdown-item" type="button">Servicios y Accesorios</button>
    <button class="dropdown-item" type="button">Financiacion</button>
    <button class="dropdown-item" type="button">Reviews y Comunidad</button>
    <button class="dropdown-item" type="button">Toyota Mobility Service</button>
    <button class="dropdown-item" type="button">Toyota Gazoo Racing</button>
    <button class="dropdown-item" type="button">Toyota Hibridos</button>
    <button class="dropdown-item" type="button">Concesionarios</button>
    <button class="dropdown-item" type="button">Test Drive</button>
    <button class="dropdown-item" type="button">Contacto</button>
    <button class="dropdown-item" type="button">Actividades</button>
    <button class="dropdown-item" type="button">Servicios al Cliente</button>
    <button class="dropdown-item" type="button">Ventas Especiales</button>
    <button class="dropdown-item" type="button">Innovacion</button>
    <button class="dropdown-item" type="button">Prensa</button>
    <button class="dropdown-item" type="button">Acerca de...</button>
  </div>
</div>
  </form>
</nav>

)
}

export default Navbar;