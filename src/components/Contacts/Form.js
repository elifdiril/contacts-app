import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    dispatch(addContact({ id: nanoid(), name, phone_number: number }));
    setName("");
    setNumber("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="phone number"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
