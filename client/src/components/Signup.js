import { Formik, Form, Field, ErrorMessage } from 'formik';

function Signup() {


    return (
        <div>
            <h1>Signup</h1>
            <Formik>
                {({ isSubmitting }) => {
                    <Form>
                        <Field
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                        />
                        <ErrorMessage name='username' component="div" />
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                    </Form>
                }}
            </Formik>
        </div>
    )
}

export default Signup