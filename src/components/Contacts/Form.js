import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name) return false;

    dispatch(addContact({ id: nanoid(), name }));
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </form>
    </div>
  );
};

export default Form;
