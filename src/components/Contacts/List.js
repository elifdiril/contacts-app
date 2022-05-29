import React from "react";

import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";
import Contact from "./Contact";

const List = () => {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <div>
      {contacts.map(contact => <Contact key={contact.id} name={contact.name} />)}
    </div>
  );
};

export default List;
