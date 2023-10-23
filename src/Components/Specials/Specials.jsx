import {
  ArticleContainer,
  CardContainer,
  CardCta,
  CardImg,
  CardImg2,
  CardImg3,
  CardsContainer,
  DescriptionContainer,
  DescriptionInnerContainer,
  DescriptionP,
  Header1,
  HeaderButton,
  HeaderContainer,
  HeaderDescription,
  HeaderPrice,
} from "../../Styles/SpecialsStyles/SpecialStyles";

export default function Specials() {
  return (
    <ArticleContainer id="menu-section">
      <HeaderContainer>
        <Header1 id="menu-section">This weeks specials!</Header1>
        <HeaderButton>Online Menu</HeaderButton>
      </HeaderContainer>
      <CardsContainer>
        <CardContainer>
          <CardImg />
          <DescriptionContainer>
            <DescriptionInnerContainer>
              <HeaderDescription>Greek Salad</HeaderDescription>
              <HeaderPrice>$12.99</HeaderPrice>
            </DescriptionInnerContainer>
            <DescriptionP>
              The famous greek salad of crispy lettuce, peppers olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </DescriptionP>
            <CardCta>Order a delivery</CardCta>
          </DescriptionContainer>
        </CardContainer>
        <CardContainer>
          <CardImg2 />
          <DescriptionContainer>
            <DescriptionInnerContainer>
              <HeaderDescription>Bruschetta</HeaderDescription>
              <HeaderPrice>$12.99</HeaderPrice>
            </DescriptionInnerContainer>
            <DescriptionP>
              Our Bruschetta is made from grilled bread that has between smeared
              with garlic and seasoned with salt and olive oil.
            </DescriptionP>
            <CardCta>Order a delivery</CardCta>
          </DescriptionContainer>
        </CardContainer>
        <CardContainer>
          <CardImg3 />
          <DescriptionContainer>
            <DescriptionInnerContainer>
              <HeaderDescription>Lemon Dessert</HeaderDescription>
              <HeaderPrice>$12.99</HeaderPrice>
            </DescriptionInnerContainer>
            <DescriptionP>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </DescriptionP>
            <CardCta>Order a delivery</CardCta>
          </DescriptionContainer>
        </CardContainer>
      </CardsContainer>
    </ArticleContainer>
  );
}
