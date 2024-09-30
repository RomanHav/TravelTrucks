import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./FormCatalog.module.css";
import { DatePicker } from "@mui/x-date-pickers";
import * as Yup from "yup";
import { TextField } from "@mui/material";

export default function FormCatalog() {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    const bookingDate = values.bookingDate
      ? values.bookingDate.$d.toISOString()
      : null;

    const finalValues = { ...values, bookingDate };

    console.log(finalValues);

    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <div className={css.fieldContainer}>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.fieldContainer}>
              <Field
                className={css.field}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className={css.fieldContainer}>
              <DatePicker
                className={css.dateField}
                label="Booking date*"
                value={values.bookingDate}
                onChange={(value) => setFieldValue("bookingDate", value)}
                sx={{
                  ".MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <ErrorMessage name="bookingDate" component="span" />
            </div>
            <div className={css.fieldContainer}>
              <Field
                className={css.fieldArea}
                style={{ resize: "none" }}
                name="comment"
                as="textarea"
                cols="20"
                rows="5"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="span" />
            </div>
            <button className={css.formButton} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
