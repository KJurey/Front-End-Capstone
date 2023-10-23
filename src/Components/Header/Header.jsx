import Logo from '../../assets/Logo.svg';
import { NavContainer, NavList, NavListAnchor } from '../../Styles/HeaderStyles/NavList';
import { Link as RouterLink } from 'react-router-dom';


export default function Header () {

    const Icon = (props) => {
    return <img src={Logo} alt="Logo"  {...props} />
    }

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    

    return (
        <NavContainer>
            <Icon />
            <NavList>
                <NavListAnchor href='#'>Home</NavListAnchor>   
                <NavListAnchor href='/#about' onClick={handleClick('bio')}>About</NavListAnchor>
                <NavListAnchor href='/#menu' onClick={handleClick('menu')}>Menu</NavListAnchor>
                <NavListAnchor to='/booking'>Reservations</NavListAnchor>
                <NavListAnchor href='/#order-online'>Order online</NavListAnchor>
                <NavListAnchor href='/#login'>Login</NavListAnchor>
            </NavList>
        </NavContainer>
    )
}