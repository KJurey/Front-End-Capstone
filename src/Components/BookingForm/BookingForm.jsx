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
  ErrorP,
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

              <ErrorP>{errors.firstName?.message}</ErrorP>

              <label htmlFor="lastName">Last Name</label>
              <FormField
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                {...register("lastName")}
              />

              <ErrorP>{errors.lastName?.message}</ErrorP>

              <label htmlFor="email">Email</label>
              <FormField
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                {...register("email")}
              />

              <ErrorP>{errors.email?.message}</ErrorP>

              <label htmlFor="res-date">Choose date</label>
              <FormField
                type="date"
                id="res-date"
                name="date"
                onChange={handleDateChange}
                {...register("date")}
              />

              <ErrorP>{errors.date?.message}</ErrorP>

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

              <ErrorP>{errors.time?.message}</ErrorP>

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

              <ErrorP>{errors.guests?.message}</ErrorP>

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

              <ErrorP>{errors.occasion?.message}</ErrorP>

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
