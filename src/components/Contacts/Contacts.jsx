import { ContactsTitle } from "./Contacts.styled";
import ContactsForm from "./ContactsForm";
import ContactsList from "./ContactsList";

const Contacts = () => {
  return (
    <section>
      <ContactsTitle>Contact us</ContactsTitle>
      <div>
        <ContactsList />
        <ContactsForm />
      </div>
    </section>
  );
};

export default Contacts;
