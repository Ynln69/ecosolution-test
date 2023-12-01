import sprite from "../../images/sprite.svg";
import {
  ContactList,
  ContactsItem,
  ContactsSubtitle,
  ContactsDesc,
} from "./Contacts.styled";

const ContactsList = () => {
  return (
    <ContactList>
      <ContactsItem>
        <ContactsSubtitle>Phone:</ContactsSubtitle>
        <ContactsDesc>
          <svg width={28} height={28}>
            <use xlinkHref={`${sprite}#icon-call`}></use>
          </svg>
          38 (098) 12 34 567
        </ContactsDesc>
        <ContactsDesc>
          <svg width={28} height={28}>
            <use xlinkHref={`${sprite}#icon-call`}></use>
          </svg>
          38 (093) 12 34 567
        </ContactsDesc>
      </ContactsItem>
      <ContactsItem>
        <ContactsSubtitle>E-mail:</ContactsSubtitle>
        <ContactsDesc>
          <svg width={28} height={28}>
            <use xlinkHref={`${sprite}#icon-sms`}></use>
          </svg>
          office@ecosolution.com
        </ContactsDesc>
      </ContactsItem>
      <ContactsItem>
        <ContactsSubtitle>Address:</ContactsSubtitle>
        <ContactsDesc>
          <svg width={28} height={28}>
            <use xlinkHref={`${sprite}#icon-map`}></use>
          </svg>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactsDesc>
      </ContactsItem>
      <ContactsItem>
        <ContactsSubtitle>Social Networks:</ContactsSubtitle>
        <div>
          <svg width={28} height={28}>
            <use xlinkHref={`${sprite}#icon-facebook`}></use>
          </svg>
          <svg width={28} height={28}>
            <use xlinkHref={`${sprite}#icon-instagram`}></use>
          </svg>
        </div>
      </ContactsItem>
    </ContactList>
  );
};

export default ContactsList;
