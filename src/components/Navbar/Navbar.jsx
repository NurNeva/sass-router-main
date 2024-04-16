import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item nav__link nav__link--active" onClick={()=>navigate ('/')}>
              HOME
          </li>

          <li class="nav__item nav__link" onClick={()=>navigate ('/about')}>
              ABOUT ME
          </li>

          <li class="nav__item nav__link" onClick={()=>navigate ('/projects')}>
              MY PROJECT
          </li>
          <li class="nav__item nav__link" onClick={()=>navigate ('/contact')}>
              CONTACT
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
