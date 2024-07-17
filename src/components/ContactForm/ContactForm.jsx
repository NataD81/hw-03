import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^[0-9]+$/, "Number must be digits only")
      .min(3, "Must be at least 3 digits")
      .max(15, "Must be 15 digits or less"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.form}>
        <div className={s.field}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>
        <div className={s.field}>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
