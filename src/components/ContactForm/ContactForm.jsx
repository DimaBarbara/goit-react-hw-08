import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from "./ContactForm.module.css";


const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Too Short!").max(50, "Too Long!"),
    number: Yup.string().required("Number is required").matches(
      /^[0-9]+$/,
      "Number must contain only digits"
    ).min(3, "Too Short!").max(50, "Too Long!"),
})


const ContactForm = ({onAdd}) => {

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    }
        return (
            <Formik initialValues={{
                name: "",
                number: ""
            }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                <Form>
                    <label >
                        <span>
                            Name
                        </span>
                        <Field name="name" type="text"  ></Field>
                          <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '0.9em' }}/>
                    </label>
                    <label >
                        <span>
                            Number
                        </span>
                        <Field name="number" type="tel" ></Field>
                        <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '0.9em' }} />
                    </label>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
      
        )
    }


export default ContactForm