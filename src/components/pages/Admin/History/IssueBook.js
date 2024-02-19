import React, { useEffect, useState } from "react";
import { fetchAllBook } from "../../../../redux/Book/getBookDataSlice";
import { fetchAllPatrons } from "../../../../redux/Patron/getPatronDataSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Autosuggest from "react-autosuggest";

const IssueBook = () => {
  const dispatch = useDispatch();
  const { getAllBookData } = useSelector((state) => state.getAllBooks);
  const { getAllPatronData } = useSelector((state) => state.getAllPatrons);

  const initialValues = {
    borrowDate: "",
    userId: 1,
    patronId: "",
    bookId: "",
  };

  useEffect(() => {
    if (getAllBookData.length === 0) {
      dispatch(fetchAllBook());
    }
    if (getAllPatronData.length === 0) {
      dispatch(fetchAllPatrons());
    }
  }, [dispatch, getAllBookData, getAllPatronData]);

  const [inputBook, setInputBook] = useState("");
  const [suggestionBooks, setSuggestionBooks] = useState([]);
  const [inputPatron, setInputPatron] = useState("");
  const [suggestionPatrons, setSuggestionPatrons] = useState([]);

  const onSubmit = (values) => {
    console.log("Data", values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.borrowDate) {
      errors.borrowDate = "Borrow date is required";
    }
    if (!values.patronId) {
      errors.patronId = "Library patron is required";
    }
    if (!values.bookId) {
      errors.bookId = "Book to be issued is required";
    }
    return errors;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionBooks(
      getAllBookData.filter((book) =>
        book.title.toLowerCase().includes(value.toLowerCase())
      )
    );
    setSuggestionPatrons(
      getAllPatronData.filter(
        (patron) =>
          patron.firstname.toLowerCase().includes(value.toLowerCase()) ||
          patron.lastname.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionBooks([]);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="text-2xl font-bold">Issue A Book</div>
          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="patronId"
            >
              Library Patron:
            </label>
            <Autosuggest
              theme={{
                container: {
                  position: "relative",
                },
                suggestionsContainer: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 10,
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  width: "100%",
                },
                suggestionsList: {
                  margin: 0,
                  padding: 0,
                  listStyleType: "none",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#f0f0f0",
                },
              }}
              inputProps={{
                placeholder: "Search borrower",
                className:
                  "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline",
                id: "patronId",
                type: "text",
                name: "patronId",
                value: inputPatron,
                onChange: (_, { newValue }) => {
                  setInputPatron(newValue);
                  setFieldValue("patronId", "");
                },
              }}
              suggestions={suggestionPatrons}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              onSuggestionSelected={(_, { suggestion }) => {
                setFieldValue("patronId", suggestion.id);
              }}
              getSuggestionValue={(suggestion) =>
                suggestion.firstname + " " + suggestion.lastname
              }
              renderSuggestion={(suggestion) => (
                <div>
                  {suggestion.firstname} {suggestion.lastname}
                </div>
              )}
            />
            <ErrorMessage
              name="patronId"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="bookId"
            >
              Issued Book:
            </label>
            <Autosuggest
              theme={{
                container: {
                  position: "relative",
                },
                suggestionsContainer: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 10,
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  width: "100%",
                },
                suggestionsList: {
                  margin: 0,
                  padding: 0,
                  listStyleType: "none",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#f0f0f0",
                },
              }}
              inputProps={{
                placeholder: "Search book",
                className:
                  "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline",
                id: "bookId",
                type: "text",
                name: "bookId",
                value: inputBook,
                onChange: (_, { newValue }) => {
                  setInputBook(newValue);
                  setFieldValue("bookId", "");
                },
              }}
              suggestions={suggestionBooks}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              onSuggestionSelected={(_, { suggestion }) => {
                setFieldValue("bookId", suggestion.id);
              }}
              getSuggestionValue={(suggestion) => suggestion.title}
              renderSuggestion={(suggestion) => <div>{suggestion.title}</div>}
            />
            <ErrorMessage
              name="bookId"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>

          <div className="flex justify-between gap-5 mt-2">
            <div className="mb-2 mt-2 w-full">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="borrowDate"
              >
                Borrow Date:
              </label>
              <Field
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                id="borrowDate"
                type="date"
                name="borrowDate"
              />
              <ErrorMessage
                name="borrowDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Issue Book
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default IssueBook;
