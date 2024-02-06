import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

import Card from "../../UIElements/Card";
import Input from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Util/Validators";
import { useForm } from "../../Shared/Hooks/Form-hooks";
import { AuthContext } from "../../Shared/Context/Auth-Context";
import "./CSS/Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();

    // Redirect to the home page
    navigate("/mainpage");
  };

  const switchModeHAndler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const closeBtn = () => {
    navigate("/");
  };

  return (
    <Card className="authentication">
      <div className="flex justify-between">
        {!isLoginMode ? <h2>SIGNUP REQUIRED</h2> : <h2>LOGIN REQUIRED</h2>}
        <button onClick={closeBtn}>
          <IoMdCloseCircle className="w-5 h-5 text-red-600" />
        </button>
      </div>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 6 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
        <Button type="button" inverse onClick={switchModeHAndler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
