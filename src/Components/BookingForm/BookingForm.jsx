import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import * as yup from "yup";
import {
  CardContainer,
  MainFormContainer,
  FormContainer,
  MainOutContainer,
  FormInContainer,
  FormField,
  FormSelect,
  FormButton,
  Background,
} from "../../Styles/BookingStyles/BookingStyles";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  date: yup.date().typeError("Please enter a valid date").required("Date is required"),
  time: yup.string().required("Date is required"),
  guests: yup.number().typeError("Please enter a valid guests number").min(1).max(10).required(),
  occasion: yup.string(),
});

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const [date, setDate] = useState(formattedDate);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema), // Apply Yup schema for validation
  });

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  const onSubmit = (data) => {
    submitForm(data);
  };

  return (
    <Background>
      <MainFormContainer>
      <MainOutContainer>
        <CardContainer>
          <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInContainer>
              <label htmlFor="firstName">First Name</label>
              <FormField
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                {...register("firstName")}
              />

              <p>{errors.firstName?.message}</p>

              <label htmlFor="lastName">Last Name</label>
              <FormField
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                {...register("lastName")}
              />

              <p>{errors.lastName?.message}</p>

              <label htmlFor="email">Email</label>
              <FormField
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                {...register("email")}
              />

              <p>{errors.email?.message}</p>

              <label htmlFor="res-date">Choose date</label>
              <FormField
                type="date"
                id="res-date"
                name="date"
                onChange={handleDateChange}
                {...register("date")}
              />

              <p>{errors.date?.message}</p>

              <label htmlFor="res-time">Choose time</label>
              <FormSelect
                id="res-time"
                name="time"
                onChange={handleChange}
                {...register("time")}
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </FormSelect>

              <p>{errors.time?.message}</p>

              <label htmlFor="guests">Number of guests</label>
              <FormField
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="guests"
                onChange={handleChange}
                {...register("guests")}
              />

              <p>{errors.guests?.message}</p>

              <label htmlFor="occasion">Occasion</label>
              <FormSelect
                id="occasion"
                name="occasion"
                onChange={handleChange}
                {...register("occasion")}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </FormSelect>

              <p>{errors.occasion?.message}</p>

              <FormButton type="submit">Make Your reservation</FormButton>
            </FormInContainer>
          </FormContainer>
        </CardContainer>
      </MainOutContainer>
    </MainFormContainer>
    </Background>
  );
}

export default BookingForm;
