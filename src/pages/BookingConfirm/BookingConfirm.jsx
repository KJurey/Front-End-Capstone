import {
  Background,
  MainFormContainer2,
  MainOutContainer,
  CardContainer,
  Header1,
  BookingP,
  ConfirmBooking,
} from "../../Styles/BookingStyles/BookingStyles";

export default function BookingConfirm() {
  return (
    <Background>
      <MainFormContainer2>
        <MainOutContainer>
          <CardContainer>
            <ConfirmBooking>
              <Header1>Your reservation is complete!</Header1>
              <BookingP>
                You will receive shortly a confirmation email about your
                reservation.
              </BookingP>
              <BookingP>
                Remember to arrive at least 10 minutes early to give you our best assistance.
              </BookingP>
            </ConfirmBooking>
          </CardContainer>
        </MainOutContainer>
      </MainFormContainer2>
    </Background>
  );
}
