import Logo from '../../assets/Logo.svg';
import { NavContainer, NavList, NavListAnchor } from '../../Styles/HeaderStyles/NavList';

export default function Header () {

    const Icon = (props) => {
    return <img src={Logo} alt="Logo"  {...props} />
    }

    return (
        <NavContainer>
            <Icon />
            <NavList>
                <NavListAnchor href='#'>Home</NavListAnchor>   
                <NavListAnchor href='#'>About</NavListAnchor>
                <NavListAnchor href='#'>Menu</NavListAnchor>
                <NavListAnchor href='#'>Reservations</NavListAnchor>
                <NavListAnchor href='#'>Order online</NavListAnchor>
                <NavListAnchor href='#'>Login</NavListAnchor>
            </NavList>
        </NavContainer>
    )
}