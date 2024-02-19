// import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function Login({ onLogin }) {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch("/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username }),
    //     })
    //         .then((r) => r.json())
    //         .then((user) => onLogin(user))
    // }

    const formSchema = yup.object().shape({
        username: yup.string().required("Must enter username").max(20),
        password: yup.string().required("Password required"),
    })

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            })
                .then((r) => r.json())
                .then((data) => {
                    onLogin(data)
                    console.log(data)
                })
        }
    })
                
    
    return (
        <div>
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
                <label htmlFor='password'>Password</label>
                <br />
                <input
                    id='password'
                    name='password'
                    placeholder='Enter Password...'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <p style={{ color: "red" }}>{formik.errors.password}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <h3>Login with Username</h3>
        //     <input
        //         type="text"
        //         id="username"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)}
        //     />
        //     <button type="submit">Login</button>
        // </form>
    )
}

export default Login