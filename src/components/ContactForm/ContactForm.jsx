import React from 'react'
import { Formik, Form, Field } from 'formik';

const ContactForm = ({onAdd}) => {

    const handleSubmit = (values, actions) => {
        console.log(values);
        onAdd({
            id: Date.now(),
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
                onSubmit={handleSubmit}>
                <Form>
                    <label >
                        <span>
                            Name
                        </span>
                        <Field name="name" type="text"  ></Field>
                    </label>
                    <label >
                        <span>
                            Number
                        </span>
                        <Field name="number" type="tel" ></Field>
                    </label>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
      
        )
    }


export default ContactForm