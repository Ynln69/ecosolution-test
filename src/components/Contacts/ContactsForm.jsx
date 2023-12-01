import SecondaryBtn from "components/SecondaryBtn/SecondaryBtn";
import {
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactTextarea,
} from "./Contacts.styled";

const ContactsForm = () => {
  return (
    <ContactForm>
      <ContactLabel htmlFor="name">
        * Full name:
        <ContactInput
          type="text"
          name="fullname"
          placeholder="John Rosie"
          id="name"
        />
      </ContactLabel>
      <ContactLabel htmlFor="">
        {" "}
        * E-mail:
        <ContactInput
          type="email"
          name="email"
          placeholder="johnrosie@gmail.com"
        />
      </ContactLabel>
      <ContactLabel htmlFor="">
        {" "}
        * Phone:
        <ContactInput type="phone" name="phone" placeholder="380961234567" />
      </ContactLabel>
      <ContactLabel htmlFor="coment">
        Message:
        <ContactTextarea
          name="comment"
          placeholder="Your message"
          id="coment"
          cols="30"
          rows="10"
        ></ContactTextarea>
      </ContactLabel>
      <SecondaryBtn type="submit" title="Send" />
    </ContactForm>
  );
};

export default ContactsForm;
