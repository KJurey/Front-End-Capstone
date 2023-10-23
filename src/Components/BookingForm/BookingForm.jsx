import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  date: yup.date().required("Date is required"),
  time: yup.string().required("Date is required"),
  guests: yup.number().min(1).max(10),
  occasion: yup.string(),
});

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: formattedDate,
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  const [date, setDate] = useState(formattedDate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        date: formattedDate,
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        submitForm(values);
      }}
    >
      {() => (
        <form
          style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <Field 
          type="text" 
          id="firstName" 
          name="firstName" 
          onChange={handleChange} 
          value={formData.firstName}
          required
          />
          <ErrorMessage name="firstName" component="div" />

          <label htmlFor="lastName">Last Name</label>
          <Field 
          type="text" 
          id="lastName" 
          name="lastName" 
          onChange={handleChange} 
          value={formData.lastName}
          required
          />
          <ErrorMessage name="lastName" component="div" />

          <label htmlFor="email">Email</label>
          <Field 
          type="email" 
          id="email" 
          name="email" 
          onChange={handleChange} 
          value={formData.email}
          required
          />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="res-date">Choose date</label>
          <Field 
          type="date" 
          id="res-date" 
          name="date" 
          onChange={handleDateChange} 
          value={date}
          required
          />

          <label htmlFor="res-time">Choose time</label>
          <Field 
          as="select" id="res-time" name="time" onChange={handleChange} value={formData.time}>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Field>

          <label htmlFor="guests">Number of guests</label>
          <Field
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            required
            onChange={handleChange} 
            value={formData.guests}
          />

          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion" onChange={handleChange} value={formData.occasion}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>

          <button type="submit">Make Your reservation</button>
        </form>
      )}
    </Formik>
  );
}

export default BookingForm;
