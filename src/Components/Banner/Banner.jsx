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

import { useNavigate } from "react-router-dom";

export default function Banner() {

  const navigate = useNavigate();

  function handleClick() {
      navigate("/booking");
    }

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
              <ArticleButton onClick={handleClick}>Reserve a Table</ArticleButton>
            </section>
          </ContainerHeader>
          <ArticleImg />
        </ContainerImgHeader>
      </Container>
    </ArticleBanner>
  );
}
