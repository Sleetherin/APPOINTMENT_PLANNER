import React from "react";

export const ContactPicker = (props) => {
  return (
    <select 
    onChange={props.setContact}
    >
    <option value="">No Contact Selected</option>
    {props.contacts.map((contact,index) => {
      return(<option value={contact} key={index}>{contact}</option>)
    })}
    </select>
  );
};
