import React, { useState, useEffect } from "react";
// import Member from './Member';
import MemberForm from './MemberForm';

const initialFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  role: "",
  unit: ""
} 



function App() {

  const [ formValues, setFormValues ] = useState(initialFormValues);

  const updateMemberForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  };

  const submitMemberForm = () => {
    let newMember = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      unit: formValues.unit.trim()
    }
    if (!newMember.firstName || newMember.lastName || newMember.username || newMember.email || newMember.role || newMember.unit) return;
  }

  return (
    <div>
      <header>
        <h1>Member Form</h1>
        <MemberForm
          values={formValues}
          update={updateMemberForm}
          // submit={submitMemberForm}
        />
      </header>
    </div>
  );
}

export default App;
