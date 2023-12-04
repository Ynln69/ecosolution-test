import { ContactsTitle, ContactContainer } from "./Contacts.styled";
import ContactsForm from "./ContactsForm";
import ContactsList from "./ContactsList";

const Contacts = () => {
  return (
    <section id="contacts">
      <ContactsTitle>Contact us</ContactsTitle>
      <ContactContainer>
        <ContactsList />
        <ContactsForm />
      </ContactContainer>
    </section>
  );
};

export default Contacts;
