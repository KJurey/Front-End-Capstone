import {
  ArticleBioContainer,
  BioContainer,
  BioGrid,
  BioGroup,
  BioHeader1,
  BioHeader2,
  BioImg1,
  BioImg2,
  BioInnerContainer,
  BioP,
} from "../../Styles/BioStyles/BioStyles";

export default function Bio() {
  return (
    <ArticleBioContainer id="bio-section">
      <BioContainer>
        <BioInnerContainer>
          <BioGroup>
            <BioHeader1>Little Lemon</BioHeader1>
            <BioHeader2>Chicago</BioHeader2>
            <BioP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere quam non tortor cursus aliquam. Fusce suscipit odio ante,
              eget lacinia metus convallis sed. Nunc laoreet a arcu ut aliquam.
              Ut mollis, ligula ac condimentum cursus, velit sem accumsan arcu,
              nec commodo lacus diam quis diam.
            </BioP>
          </BioGroup>
          <BioGrid>
            <BioImg1 />
            <BioImg2 />
          </BioGrid>
        </BioInnerContainer>
      </BioContainer>
    </ArticleBioContainer>
  );
}
