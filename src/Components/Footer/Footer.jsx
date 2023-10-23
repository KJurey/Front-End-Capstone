import {
  FooterContainer,
  FooterImg,
  FooterInnerContainer,
  FooterList,
  FooterLink,
} from "../../Styles/FooterStyles/FooterStyles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterImg />
        <FooterList>
          <FooterLink>Home</FooterLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Menu</FooterLink>
          <FooterLink>Reservations</FooterLink>
          <FooterLink>Order Online</FooterLink>
          <FooterLink>Login</FooterLink>
        </FooterList>
        <FooterList>
          <FooterLink>Address</FooterLink>
          <FooterLink>Phone number</FooterLink>
          <FooterLink>Email</FooterLink>
        </FooterList>
        <FooterList>
          <FooterLink>Address</FooterLink>
          <FooterLink>Phone number</FooterLink>
          <FooterLink>Email</FooterLink>
        </FooterList>
      </FooterInnerContainer>
    </FooterContainer>
  );
}
