import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "bgarciasv",
    email: "brayan@gmail.com",
  });

  const { email, username } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState((form) => ({
      ...form,
      [name]: value,
    }));
  };

  useEffect(() => {
    // console.log("use Effect called!");
  }, []);

  useEffect(() => {
    // console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed!");
  }, [formState.email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="brayan@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "bgarciasv2" && <Message />}
    </>
  );
};
