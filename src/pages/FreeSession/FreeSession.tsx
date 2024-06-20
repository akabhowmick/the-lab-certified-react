import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const serviceId = "service_x1v468p";
const templateId = "template_8przsfw";
const publicKey = "aI0R8QkNkegFHRxBK";

const classOptions = ["K - 4th", "5th-8th", "Highschool", "College/Adult/Other"];

const contactFormInput = [
  { name: "Name", label: "from_name" },
  { name: "Email", label: "reply_to" },
  { name: "Phone Number", label: "phone_number" },
  { name: "Message", label: "message" },
];

export const FreeSession = () => {
  const [buttonState, setButtonState] = useState("Send Message");

  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      phone_number: "", // phoneNumber of user
      reply_to: "", // user email
      message: "", // message of email
      class_of_interest: classOptions[0], //class that user wants to ask about
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      phone_number: Yup.string()
        .required("* Phone Number is required")
        .matches(/[0-9]{10}/, "Enter your 10 digit phone number with no spaces")
        .max(10, "Only enter 10 digits"),
      reply_to: Yup.string().email("Invalid email address").required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
      class_of_interest: Yup.string().required(
        "* Picking a class wil help us give you the most relevant information"
      ),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setButtonState("Sending Email");
      try {
        emailjs.send(serviceId, templateId, values, publicKey).then(() => {
          setButtonState("Send Email");
          setSubmitting(false);
          resetForm();
        });
      } catch {
        setButtonState("Send Email");
        setSubmitting(false);
      }
    },
  });

  // allows the input to have access to correct formik values
  const getFormikValues = (label: string) => {
    if (label === "from_name") {
      return formik.values.from_name;
    } else if (label === "reply_to") {
      return formik.values.reply_to;
    } else if (label === "phone_number") {
      return formik.values.phone_number;
    } else if (label === "message") {
      return formik.values.message;
    } else if (label === "class_of_interest") {
      return formik.values.class_of_interest;
    }
    return "";
  };

  // allows access to the error message in formik
  const getFormikErrors = (label: string) => {
    if (label === "from_name") {
      return formik.errors.from_name;
    } else if (label === "reply_to") {
      return formik.errors.reply_to;
    } else if (label === "phone_number") {
      return formik.errors.phone_number;
    } else if (label === "message") {
      return formik.errors.message;
    } else if (label === "class_of_interest") {
      return formik.errors.class_of_interest;
    }
    return "";
  };

  const contactFormInputs = contactFormInput.map(({ name, label }) => {
    return (
      <>
        <div>
          <h2>Free Session Form</h2>
          <h3>
            After sent, The Lab will be in touch within 1-2 business days with options to join your
            first free group training session
          </h3>
        </div>
        <div key={name} className="contact-form-div">
          <label htmlFor={label}>{name}</label>
          <input
            className="contact-form-input"
            id={label}
            name={label}
            type="text"
            autoComplete="off"
            placeholder={`Your ${name}`}
            onChange={formik.handleChange}
            value={getFormikValues(label)}
          />
          {formik.submitCount > 0 && getFormikErrors(label) && (
            <div className="expandable show">{getFormikErrors(label)}</div>
          )}
        </div>
      </>
    );
  });

  const selectClasses = (
    <div className="contact-form-div">
      <label htmlFor="class_of_interest">Class Of Interest</label>
      <select
        className="contact-form-input"
        id="class_of_interest"
        name="class_of_interest"
        onChange={formik.handleChange}
        value={getFormikValues("class_of_interest")}
      >
        {classOptions.map((className) => {
          return <option key={className} value={className} label={className}></option>;
        })}
      </select>
      {formik.submitCount > 0 && getFormikErrors("class_of_interest") && (
        <div className="expandable show">{getFormikErrors("class_of_interest")}</div>
      )}
    </div>
  );

  return (
    <form className="formcontact" onSubmit={formik.handleSubmit}>
      <div className="form-row-1">
        {contactFormInputs}
        {selectClasses}
        <div className="col-12">
          <button
            id="contact-submit-btn"
            disabled={formik.isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            <span>{buttonState}</span>
          </button>
        </div>
      </div>
    </form>
  );
};
