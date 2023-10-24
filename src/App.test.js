import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './Components/BookingForm/BookingForm'

test('Form renders correctly', () => {
  // Mock the availableTimes array

  const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
  render(<BookingForm availableTimes={availableTimes} />);
  
  // Use fireEvent to interact with the form fields
  const firstNameInput = screen.getByLabelText("First Name");
  const lastNameInput = screen.getByLabelText("Last Name");
  const emailInput = screen.getByLabelText("Email");

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

  // Assert the values using expect:
  expect(firstNameInput.value).toBe('John');
  expect(lastNameInput.value).toBe('Doe');
  expect(emailInput.value).toBe('john@example.com');
});

test('Form submission', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const submitForm = jest.fn();

  render(<BookingForm submitForm={submitForm} availableTimes={availableTimes} />);
  
  // Enter valid data into the form fields
  fireEvent.change(screen.getByLabelText("First Name"), { target: { value: "John" } });
  fireEvent.change(screen.getByLabelText("Last Name"), { target: { value: "Finsky" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "john@gmail.com" } });
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2023-10-25" } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "17:00" } });
  // ... enter valid data for other fields

  // Submit the form
  fireEvent.click(screen.getByText("Make Your reservation"));

  // Verify that the onSubmit function was called
  expect(submitForm).toHaveBeenCalledWith({
    firstName: "John",
    lastName: "Finsky",
    email: "john@gmail.com",
    date: "2023-10-25",
    time: "17:00",
    guests: 1, // Assuming the default value is 1
    occasion: "Birthday", // Assuming the default occasion
  });
});





