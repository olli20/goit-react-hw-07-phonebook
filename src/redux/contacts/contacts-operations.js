import * as api from '../../api/api-service';

import * as actions from './contacts-actions';

export const fetchAllContacts = () => {
    const func = async(dispatch) => {
        try {
            dispatch(actions.fetchAllContactsRequest()); // request went
            const data = await api.getAllContactsFromServer();
            dispatch(actions.fetchAllContactsSuccess(data));
        } catch({response}) {
            dispatch(actions.fetchAllContactsError(response.data.message));
        }
    }
    return func;
}

const isDublicated = (name, contacts) => {
    const result = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length;
    return Boolean(result);
}

export const fetchAddContact = (data) => {
    const func = async(dispatch, getState) => { 
        try {
            const {contacts} = getState();
            if(isDublicated(data.name, contacts.items)) {
                alert(`${data.name} is already in contacts`);
                return false;
            }
            dispatch(actions.fetchAddContactRequest());
            const result = await api.addContact(data);
            dispatch(actions.fetchAddContactSuccess(result));
        } catch({response}) {
            dispatch(actions.fetchAddContactError(response.data.message));
        }
    }
    return func;
}

export const fetchDeleteContact = (id) => {
    const func = async(dispatch) => { 
        try {
            dispatch(actions.fetchDeleteContactRequest());
            await api.deleteContact(id);
            dispatch(actions.fetchDeleteContactSuccess(id));
        } catch({response}) {
            dispatch(actions.fetchDeleteContactError(response.data.message));
        }
    }
    return func;
}

