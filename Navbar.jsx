import React, {useState} from "react";
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
const Navbar = () => {

    const [menu,setMenu] = useState("shop");  

    return (
        <div className = 'navbar'>
         <div className = "nav-logo">
            <img src = {logo} alt=''/>
            <p>TileShop</p>
         </div>
         <ul className='nav-menu'>
           <li onClick={() => {setMenu("Home")}}><Link style={{ textDecoration: 'none'}} to ='/'>Home</Link>{menu==="Home" ? <hr/> : " "}</li>
           <li onClick={() => {setMenu("tiles")}}><Link style={{ textDecoration: 'none'}} to ='/tiles'>Tile</Link>{menu==="tiles" ? <hr/>: " "}</li>
           <li onClick={() => {setMenu("stones")}}><Link style={{ textDecoration: 'none'}} to ='/stones'>Stone</Link>{menu==="stones" ? <hr/>: " "}</li>
           <li onClick={() => {setMenu("vinyl floors")}}><Link style={{ textDecoration: 'none'}}to ='/vynil floors'>Vynil Floors</Link>{menu==="vinyl floors" ? <hr/>:" "}</li>
           <li onClick={() => {setMenu("tools&installations")}}><Link style={{ textDecoration: 'none'}}to ='/tools&installations'>Tools&Installations</Link>{menu==="tools&installations" ? <hr/>: " "}</li>
           <li onClick={() => {setMenu("FAQs")}}><Link style={{ textDecoration: 'none'}}to ='/FAQs'>FAQ</Link>{menu==="FAQs" ? <hr/>: " "}</li>
           <li onClick={() => {setMenu("Contact us")}}><Link style={{textDecoration: 'none'}}to ='/Contact us'>Contact Us</Link>{menu==="Contact us" ? <hr/>: " "}</li>
          </ul>
            <div className="nav-login-cart">
                <Link to ='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar