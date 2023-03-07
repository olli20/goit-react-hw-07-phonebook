export const getAllContacts = ({contacts}) => contacts.items;
export const getError = ({contacts}) => contacts.error;
export const getLoading = ({contacts}) => contacts.loading;

export const getFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name }) => {
        return (name.toLowerCase().includes(normalizedFilter))
    })
    return result;
}