import React from "react";



const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Name the appointment" 
      onChange={(e) => setTitle(e.target.value)}/>
      <input type="date" value={date} 
      onChange={(e) => setDate(e.target.value)}
      min={getTodayString}/>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
      
      <input type="submit"/>
    </form>
  );
};
