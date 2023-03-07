import axios from 'axios';

const contactsInstance = axios.create({
    baseURL: "https://6405e28eeed195a99f8f9e74.mockapi.io/api/contacts",
})

export const getAllContactsFromServer = async() => {
    const {data} = await contactsInstance.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await contactsInstance.post("/", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await contactsInstance.delete(`/${id}`);
    return data;
}

