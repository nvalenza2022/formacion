import { Link } from "react-router-dom"
import "../Navbar/Navbar.css"


const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar