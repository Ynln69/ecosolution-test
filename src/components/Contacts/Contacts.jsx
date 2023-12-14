import ContactsForm from "./ContactsForm";
import ContactsList from "./ContactsList";

import { Section, Container } from "css/base.styled";
import { ContactsTitle, ContactContainer } from "./Contacts.styled";

const Contacts = () => {
  return (
    <Section id="contacts">
      <Container>
        <ContactsTitle>Contact us</ContactsTitle>
        <ContactContainer>
          <ContactsList />
          <ContactsForm />
        </ContactContainer>
      </Container>
    </Section>
  );
};

export default Contacts;
