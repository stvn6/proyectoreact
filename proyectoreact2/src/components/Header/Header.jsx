import react from "react"
import "./Header.css"

function Header =()=> {
    return (
        <div className="header">
            <div className="header-left">
                <img className="logo" src="#"/>
                <h2> Los panas </h2>
            </div>
            <div className="header-center">
                <ul className="header-lists">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contactanos</a></li>
                    <div className="header-centerMenu">
                        <button>Proyectos</button>
                        <div className="dropdown-header">
                            <a href="#">Amazon</a>
                            <a href="#">Aliexpress</a>
                            <a href="#">Tesla</a>

                        </div>
                    </div>
                    <li><a href="#">Portafolio</a></li>
                </ul>
            </div>
            <div className="header-right">
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
        </div>
    )
}
export default Header