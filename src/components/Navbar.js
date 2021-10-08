import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';



function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const CloseMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960){setButton(false)
        }  
        else  {setButton(true); 
        }   
    }
window.addEventListener('resize', showButton);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                       <img className="logo-AB" src="/Logo/Logo-Borealis WEb-blanc-fond-transparant.png" alt=" Logo Atelier Borealis"></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links btn' onClick={CloseMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-links btn' onClick={CloseMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/realisations" className='nav-links btn' onClick={CloseMobileMenu}>
                                Réalisations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className='nav-links btn' onClick={CloseMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        
                    </ul>
                    {button &&<Button buttonStyle='btn--outline'>CONTACTEZ-NOUS</Button>}
                   

               </div>
           </nav>
        </>
    )
}

export default Navbar
