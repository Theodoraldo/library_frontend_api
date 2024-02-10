import React from "react";
import { useDispatch } from "react-redux";
import { postPatron } from "../../../../redux/Patron/postPatronDataSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CreatePatron = () => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    location: "",
    city: "",
    state: "",
    identityCard: "",
    identityNo: "",
    address: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = " * Required";
    }
    if (!values.lastName) {
      errors.lastName = " * Required";
    }
    if (!values.email) {
      errors.email = " * Required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(values.email)) {
        errors.email = " * Invalid email format";
      }
    }
    if (!values.contact) {
      errors.contact = " * Required";
    } else {
      const contactPattern = /^\d{8,15}$/;
      if (!contactPattern.test(values.contact)) {
        errors.contact = " * Invalid contact format";
      }
    }
    if (!values.location) {
      errors.location = " * Required";
    }
    if (!values.city) {
      errors.city = " * Required";
    }
    if (!values.state) {
      errors.state = " * Required";
    }
    if (!values.address) {
      errors.address = " * Required";
    }
    if (!values.identityCard) {
      errors.identityCard = " * Required";
    }
    if (!values.identityNo) {
      errors.identityNo = " * Required";
    }
    return errors;
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(postPatron(values));
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="text-2xl font-bold">Create New Patron</div>
        <div className="flex justify-between gap-5 mt-1">
          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="firstName"
            >
              <span className="flex items-center gap-2">
                First Name:{" "}
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>

          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="lastName"
            >
              <span className="flex items-center gap-2">
                Last Name :{" "}
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="mb-2 mt-2 w-full">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              <span className="flex items-center gap-2">
                Email:{" "}
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="contact"
            >
              <span className="flex items-center gap-2">
                Contact :{" "}
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="contact"
              type="text"
              name="contact"
              placeholder="Contact"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="location"
            >
              <span className="flex items-center gap-2">
                Location:{" "}
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="location"
              type="text"
              name="location"
              placeholder="Location"
            />
          </div>

          <div className="mb-2 mt-2 w-full">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
              <span className="flex items-center gap-2">
                City :{" "}
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="city"
              type="text"
              name="city"
              placeholder="City"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="mb-2 mt-2 w-full">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="state">
              <span className="flex items-center gap-2">
                State:{" "}
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="state"
              type="text"
              name="state"
              placeholder="State"
            />
          </div>

          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="address"
            >
              <span className="flex items-center gap-2">
                Address :{" "}
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="address"
              type="text"
              name="address"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="identityCard"
            >
              <span className="flex items-center gap-2">
                Identity Card:{" "}
                <ErrorMessage
                  name="identityCard"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              as="select"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="identityCard"
              name="identityCard"
            >
              <option value="">Select Identity Card Type</option>
              <option value="Passport">Passport</option>
              <option value="Driver License">Driver License</option>
              <option value="National ID Card">National ID Card</option>
              <option value="Social Security Card">Social Security Card</option>
              <option value="Student's ID Card">Student's ID Card</option>
              <option value="Voter's ID Card">Voter's ID Card</option>
            </Field>
          </div>

          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="identityNo"
            >
              <span className="flex items-center gap-2">
                Identity Card Number :{" "}
                <ErrorMessage
                  name="identityNo"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </span>
            </label>
            <Field
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="identityNo"
              type="text"
              name="identityNo"
              placeholder="Identity Number"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Patron
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CreatePatron;
