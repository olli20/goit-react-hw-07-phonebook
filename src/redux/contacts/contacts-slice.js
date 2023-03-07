import {createSlice} from '@reduxjs/toolkit';

import {fetchAllContactsRequest, fetchAllContactsSuccess, fetchAllContactsError, fetchAddContactRequest, 
    fetchAddContactSuccess, fetchAddContactError, fetchDeleteContactRequest, fetchDeleteContactSuccess, fetchDeleteContactError} 
    from './contacts-actions';

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContactsRequest, (store) => {
                store.loading = true
            })
            .addCase(fetchAllContactsSuccess, (store, {payload}) => {
                store.loading = false;
                store.items = payload;
            }) 
            .addCase(fetchAllContactsError, (store, {payload}) => {
                store.loading = false;
                store.error = payload
            }) 
            .addCase(fetchAddContactRequest, (store) => {
                store.loading = true;
            }) 
            .addCase(fetchAddContactSuccess, (store, {payload}) => {
                store.loading = false;
                store.items.push(payload);
            })
            .addCase(fetchAddContactError, (store, {payload}) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(fetchDeleteContactRequest, (store) => {
                store.loading = true;
            })
            .addCase(fetchDeleteContactSuccess, (store, {payload}) => {
                store.loading = false;
                const index = store.items.findIndex(item => item.id === payload);
                store.items.splice(index, 1);
            })
            .addCase(fetchDeleteContactError, (store, {payload}) => {
                store.loading = false;
                store.error = payload;
            })
    }
})

export default contactsSlice.reducer;




// extraReducers: {
//         [fetchAllContactsRequest]: (store) => {
//             store.loading = true;
//         },
//         [fetchAllContactsSuccess]: (store, {payload}) => {
//             store.loading = false;
//             store.items = payload;
//         },
//         [fetchAllContactsError]: (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         },
//         [fetchAddContactRequest]: (store) => {
//             store.loading = true;
//         },
//         [fetchAddContactSuccess]: (store, {payload}) => {
//             store.loading = false;
//             store.items.push(payload);
//         },
//         [fetchAddContactError]: (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         },
//         [fetchDeleteContactRequest]: (store) => {
//             store.loading = true;
//         },
//         [fetchDeleteContactSuccess]: (store, {payload}) => {
//             store.loading = false;
//             const index = store.items.findIndex(item => item.id === payload)
//             store.items.splice(index, 1);
//         },
//         [fetchDeleteContactError]: (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         },
// }
        