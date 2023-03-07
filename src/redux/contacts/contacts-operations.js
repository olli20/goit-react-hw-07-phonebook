import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/api-service';

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch/all",
    async(_, {rejectWithValue}) => {
        try {
            const data = await api.getAllContactsFromServer();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const isDublicated = (name, contacts) => {
    const result = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length;
    return Boolean(result);
};


export const fetchAddContact = createAsyncThunk(
    'contacts/add/contact',
    async (data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            if(isDublicated(data.name, contacts.items)) {
                alert(`${data.name} is already in contacts`);
                return false;
            }
        },
    }
);

export const fetchDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue}) => {
        try {
            await api.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// export const fetchAllContacts = () => {
//     const func = async(dispatch) => {
//         try {
//             dispatch(actions.fetchAllContactsRequest()); // request went
//             const data = await api.getAllContactsFromServer();
//             dispatch(actions.fetchAllContactsSuccess(data));
//         } catch(error) {
//             dispatch(actions.fetchAllContactsError(error.message));
//         }
//     }
//     return func;
// }

// export const fetchAddContact = (data) => {
//     const func = async(dispatch, getState) => { 
//         try {
//             const {contacts} = getState();
//             if(isDublicated(data.name, contacts.items)) {
//                 alert(`${data.name} is already in contacts`);
//                 return false;
//             }
//             dispatch(actions.fetchAddContactRequest());
//             const result = await api.addContact(data);
//             dispatch(actions.fetchAddContactSuccess(result));
//         } catch(error) {
//             console.log(error);
//             dispatch(actions.fetchAddContactError(error.message));
//         }
//     }
//     return func;
// }

// export const fetchDeleteContact = (id) => {
//     const func = async(dispatch) => { 
//         try {
//             dispatch(actions.fetchDeleteContactRequest());
//             await api.deleteContact(id);
//             dispatch(actions.fetchDeleteContactSuccess(id));
//         } catch(error) {
//             console.log(error)
//             dispatch(actions.fetchDeleteContactError(error.message)); 
//         }
//     }
//     return func;
// }

