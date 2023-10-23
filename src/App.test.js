import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm/BookingForm'
import { initializeTimes, updateTimes } from './pages/Booking/Booking'

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Book Your Reservation");
//     expect(headingElement).toBeInTheDocument();
// })

 test('initializeTimes returns the expected initial state', () => {
     const expectedInitialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
     const initialState = initializeTimes();
  
     expect(initialState).toEqual(expectedInitialState);
     });

test('updateTimes returns the same state provided in the action', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', newTimes: ['15:00', '16:00', '17:00'] };
    const newState = updateTimes(initialState, action);
  
    expect(newState).toEqual(action.newTimes);
  });