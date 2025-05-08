import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  function handleFirstNameChange(e){
    setFirstName(e.target.value);
  }
  function handleLastNameChnage(e){
    setLastName(e.target.value);
  }


  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChnage}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
