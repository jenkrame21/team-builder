import React, { useState, useEffect } from "react";
// import Member from './Member';
import MemberForm from './MemberForm';
import Member from './Member';
import axios from "axios";

const initialFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  role: "",
  unit: ""
};

function App() {

  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ members, setMembers ] = useState([]);

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

    axios
      .post("fakeapi.com", newMember)
      .then((res) => {
        setMembers([...members, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log('Something went wrong here...', err);
      });
  };

  useEffect(() => {
    axios
      .get("fakeapi.com")
      .then((res) => setMembers(res.data))
  }, []);

  return (
    <div className="container">
      <h1>Member Form</h1>
      
      <MemberForm
        values={formValues}
        update={updateMemberForm}
        submit={submitMemberForm}
      />

      {members.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
