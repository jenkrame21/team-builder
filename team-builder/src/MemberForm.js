import React from "react";

export default function MemberForm(props) {

    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="member-form container" onSubmit={onSubmit}>
            <div className="member-form inputs">
                <label>First Name
                    <input 
                    name="firstName"
                    type="text"
                    onChange={onChange}
                    value={values.firstName}
                    placeholder="Type first name here..."
                    />
                </label>
                <label>Last Name
                    <input 
                    name="lastName"
                    type="text"
                    onChange={onChange}
                    value={values.lastName}
                    placeholder="Type last name here..."
                    />
                </label>
                <label>Username
                    <input 
                    name="username"
                    type="text"
                    onChange={onChange}
                    value={values.username}
                    placeholder="Type username here..."
                    maxLength="30"
                    />
                </label>
                <label>Email
                    <input 
                    name="email"
                    type="email"
                    onChange={onChange}
                    value={values.email}
                    placeholder="Type email here..."
                    />
                </label>
                <label>
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">---Select Role---</option>
                        <option value="frontEndEngineer">Front-End Engineer</option>
                        <option value="backEndEngineer">Back-End Engineer</option>
                        <option value="uiDesigner">UI Designer</option>
                        <option value="dataScientist">Data Scientist</option>
                    </select>
                </label>
                <div className="submitBtn">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )

}