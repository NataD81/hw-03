import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={s.contact}>
    <div className={s.info}>
      <span className={s.name}>{name}</span>
      <span className={s.number}>{number}</span>
    </div>
    <button className={s.deleteButton} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default Contact;
