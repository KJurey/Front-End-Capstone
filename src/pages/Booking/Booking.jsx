import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utils/fakeApi";
import BookingForm from "../../Components/BookingForm/BookingForm";

export default function Booking() {
    
  const [date, setDate] = useState(new Date())
 
  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }
  
  function reducer(state, action) {
    if (action.type === 'UPDATE_TIMES') {
      const newDate = new Date(action.payload);
      const newState = updateTimes(newDate);
      return newState;
    } else {
      throw new Error('Unhandled action type');
    }
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
  }