import '../styles/Header.scss'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header(){


return(
<div>
    <nav className="navbar">
        <h1>Raso</h1>
        <main className='navlist'>
            <Link to={"/"}>Home</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/services"}>Services</Link>
            <HashLink to ={"/#brands"}>Brands</HashLink>
        </main>
    </nav>
</div>
)
}
export default Header;
