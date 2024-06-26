import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const contactUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  //Функція для збору інформації з форми
  const handeSubmit = (value, actions) => {
    onAddContact(value);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handeSubmit}
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactUserSchema}
    >
      <Form className={css.container}>
        <label>
          <span>Name</span>
          <br />
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label>
          <span>Number</span>
          <br />
          <Field type="text" name="number" placeholder="Enter user number" />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
