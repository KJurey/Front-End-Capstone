import {
  ArticleContainer,
  TestimonialContainer,
  TestimonialOutContainer,
  TestimonialsContainer,
  TestimonialHeader,
  TestimonialInnerContainer,
  TestimonialRating,
  TestimonialImg,
  TestimonialGroup,
  TestimonialText,
} from "../../Styles/TestimonialStyles/TestimonialStyles";

export default function Testimonials() {
  return (
    <ArticleContainer id="testimonials-section">
      <TestimonialOutContainer>
        <TestimonialHeader>Testimonials</TestimonialHeader>
        <TestimonialsContainer>
          <TestimonialContainer>
            <TestimonialInnerContainer>
              <TestimonialRating>Rating</TestimonialRating>
              <TestimonialGroup>
                <TestimonialImg />
                <TestimonialText>Sarah</TestimonialText>
              </TestimonialGroup>
              <TestimonialText>Review</TestimonialText>
            </TestimonialInnerContainer>
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialInnerContainer>
              <TestimonialRating>Rating</TestimonialRating>
              <TestimonialGroup>
                <TestimonialImg />
                <TestimonialText>Jean</TestimonialText>
              </TestimonialGroup>
              <TestimonialText>Review</TestimonialText>
            </TestimonialInnerContainer>
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialInnerContainer>
              <TestimonialRating>Rating</TestimonialRating>
              <TestimonialGroup>
                <TestimonialImg />
                <TestimonialText>Rebecca</TestimonialText>
              </TestimonialGroup>
              <TestimonialText>Review</TestimonialText>
            </TestimonialInnerContainer>
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialInnerContainer>
              <TestimonialRating>Rating</TestimonialRating>
              <TestimonialGroup>
                <TestimonialImg />
                <TestimonialText>Nora</TestimonialText>
              </TestimonialGroup>
              <TestimonialText>Review</TestimonialText>
            </TestimonialInnerContainer>
          </TestimonialContainer>
        </TestimonialsContainer>
      </TestimonialOutContainer>
    </ArticleContainer>
  );
}
