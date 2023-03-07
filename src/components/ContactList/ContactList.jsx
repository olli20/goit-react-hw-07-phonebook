import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({contacts = [], onRemoveContact}) => {
    const elements = contacts.map(({id, name, number}) => {
        return <ContactListItem key={id} id={id} name={name} number={number} onRemoveContact={onRemoveContact}/>;
    });
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default ContactList;

ContactListItem.defaultProps = {
    contacts: [],
}

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onRemoveContact: PropTypes.func.isRequired,
}