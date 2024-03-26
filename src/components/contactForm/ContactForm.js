import React from "react"

export const ContactForm = (props) => {
 

  return (
    <form onSubmit={props.handleSubmit}>
    <input type='text' placeholder="Enter name" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
    <input type='tel' placeholder="Enter phone" value={props.phone} onChange={(e) => props.setPhone(e.target.value)} pattern = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
    <input type='email' placeholder="Enter email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
    <input type='submit' />
    </form>
  );
};

