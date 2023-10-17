import {
  ArticleBanner,
  ArticleButton,
  ArticleImg,
  Container,
  ContainerHeader,
  ContainerImgHeader,
  Header1,
  Header2,
  SectionP,
} from "../../Styles/BannerStyles/BannerStyles";

export default function Banner() {
  return (
    <ArticleBanner>
      <Container>
        <ContainerImgHeader>
          <ContainerHeader>
            <Header1>Little Lemon</Header1>
            <Header2>Chicago</Header2>
            <section>
              <SectionP>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </SectionP>
              <ArticleButton>Reserve a Table</ArticleButton>
            </section>
          </ContainerHeader>
          <ArticleImg />
        </ContainerImgHeader>
      </Container>
    </ArticleBanner>
  );
}
