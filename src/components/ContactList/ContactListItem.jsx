import PropTypes from 'prop-types';

import { HiXMark } from "react-icons/hi2";

import styles from './contact-list.module.scss';

const ContactListItem = ({id, name, number, onRemoveContact}) => {
    return (
        <li className={styles.listItem}>
            <span>{name}: </span><span>{number}</span>
            <button onClick={() => onRemoveContact(id)} type="button" className={styles.btn}>
                <HiXMark />
            </button>
        </li>
    );
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
}