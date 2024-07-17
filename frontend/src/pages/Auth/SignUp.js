// Controlled Form Components
// import React, { useState } from "react";

// const SignUp = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const nameHandler = (e) => {
//         setName(e.target.value);
//     };

//     const emailHandler = (e) => {
//         setEmail(e.target.value);
//     };

//     const passwordHandler = (e) => {
//         setPassword(e.target.value);
//     };

//     const onSubmitHandler = (e) => {
//         e.preventDefault();
//         alert(`Name: ${name}: Email: ${email} Password: ${password}`);
//     };

//     return (
//         <div className="signUpContainer">
//             <form onSubmit={onSubmitHandler}>
//                 <h2>Create an account</h2>
//                 <div className="signUpForm">
//                     <label htmlFor="name">Name</label>
//                     <input
//                         id="name"
//                         type="text"
//                         name="name"
//                         value={name}
//                         onChange={nameHandler}
//                     />
//                     <label htmlFor="email">Email Address</label>

//                     <input
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={emailHandler}
//                     />

//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={passwordHandler}
//                     />

//                     <button>Register</button>

//                     <div className="signUpFormOutput">
//                         <span>Name:{name}</span>
//                         <span>Email:{email}</span>
//                         <span>Password:{password}</span>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignUp;

// Uncontrolled Form Components
// import React, { useRef } from "react";

// const SignUp = () => {
//     const name = useRef();
//     const email = useRef();
//     const password = useRef();

//     const onSubmitHandler = (e) => {
//         e.preventDefault();
//         console.log("Name value: " + name.current.value);
//         console.log("Email value: " + email.current.value);
//         console.log("Password value: " + password.current.value);
//     };

//     return (
//         <div className="signUpContainer">
//             <form onSubmit={onSubmitHandler}>
//                 <h2>Create an account</h2>
//                 <div className="signUpForm">
//                     <label htmlFor="name">Name</label>
//                     <input id="name" type="text" name="name" ref={name} />

//                     <label htmlFor="email">Email Address</label>
//                     <input id="email" type="email" name="email" ref={email} />
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         ref={password}
//                     />

//                     <button>Register</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignUp;

import React, { useState, useEffect } from "react";

const SignUp = () => {
    const initialValues = { name: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validateForm = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Email is not valid!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formValues));
        setIsSubmit(true);
    };
    return (
        <div className="signUpContainer">
            <form onSubmit={onSubmitHandler}>
                <h2>Create an account</h2>
                <div className="signUpForm">
                    <label htmlFor="name">Name</label>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.name}
                    </p>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="name">Email</label>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.email}
                    </p>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.password}
                    </p>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />
                    <button>Register</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
