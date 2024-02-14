import { useFormik } from 'formik';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

function Signup({ onLogin }) {
    const [displayText, setDisplayText] = useState("Sign Up Now!")

    // const navigate = useNavigate()

    const formSchema = yup.object().shape({
        username: yup.string().required("Must enter username").max(20)
    })

    const formik = useFormik({
        initialValues: {username: ""},
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((res) => {
                if (res.status === 201) {
                    setDisplayText("Welcome to Spoiled Potatoes " + values.username + "!")
                    onLogin(values)
                }
            })
        }
    })


    return (
        <div>
            <h1>{displayText}</h1>
            <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
                <label htmlFor='username'>Username</label>
                <br />
                <input
                    id='username'
                    name='username'
                    placeholder='Enter Username...'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <p style={{ color: "red" }}>{formik.errors.username}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup