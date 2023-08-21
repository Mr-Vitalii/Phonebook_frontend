export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filter.inputValue;

export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const statusFilter = selectStatusFilter(state);

    if (statusFilter) {
        const normalizedFilter = statusFilter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    }
    return contacts;
};