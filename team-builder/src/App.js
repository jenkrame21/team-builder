import React, { useState } from 'react';
import './App.css';

const initialMemberFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  unit: '',
};

function App() {
  const [members, setMembers] = useState([]);

  const [memberFormValues, setMemberFormValues] = useState(initialMemberFormValues);

  return (
    <div className="App">
      <header className="App-header">
        <MemberForm 
          values={memberFormValues}
          update={updateMemberFormValues}
          submit={submitMemberForm}
        />

        {/* {members.map((member) => {
          return <Member key={member.id} details={member} />;
        })} */}
      </header>
    </div>
  );
}

export default App;
